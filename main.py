from fastapi import FastAPI  # type: ignore[import]
import pandas as pd  # type: ignore[import]
from pydantic import BaseModel, Field  # type: ignore[import]
from fastapi.middleware.cors import CORSMiddleware
import joblib

app = FastAPI()

app.add_middleware (
    CORSMiddleware, # CORS allows html to access backend
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"]
)

COLUMNS = ["latitude", "longitude", "price", "minimum_nights", "number_of_reviews", "reviews_per_month", "calculated_host_listings_count",
           "availability_365", "neighbourhood_group", "neighbourhood"]

model = joblib.load("Model_Pipeline.pkl") # Load model

# pydantic model = the input validation

class Features(BaseModel):
    latitude : float = Field(..., ge=-90, le=90, description="Latitude must between -90 and 90")
    longitude : float = Field(..., ge=-180, le=180, description="Longitude Coordinate")
    price : float = Field(..., gt=0, description="Price per night, must be positive")
    minimum_nights : int = Field(..., ge=1, le=365, description="Minimum nights required for booking")
    number_of_reviews : int =  Field(..., ge=0, description="Total Number of Reviews")
    reviews_per_month : float = Field(..., ge=0, description="Average Reviews Per month")
    calculated_host_listings_count : int = Field(..., ge=0, description="Number of Listings by this Host")
    availability_365 : int = Field(..., ge=0, le=365, description="Days Available out of 365")
    neighbourhood_group : str = Field(..., min_length=1, description="Borough or neighbourhood group")
    neighbourhood : str = Field(..., min_length=1, description="Specific neighbourhood name")




@app.get('/')
def greet():
    return "Hello Guys"

@app.post('/predict')
def predict(features : Features) :
    row = pd.DataFrame([features.dict()], columns=COLUMNS)
    prediction = model.predict(row)
    probability = model.predict_proba(row)

    return  {
        "Predicted_room_type" : prediction[0],
        "Probability" : probability.tolist()[0]
    }