import io
import json
from PIL import Image
from fastapi import File,FastAPI
import torch

model = torch.hub.load('ultralytics/yolov5', 'yolov5s')

img = '/home/stannyho/Documents/aiweb/fastapi/img/test.jpeg'
results = model(img)
print(results.pandas().xyxy[0].to_json(orient="records"))