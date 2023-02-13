FROM tiangolo/uvicorn-gunicorn:python3.9

WORKDIR /app

COPY requirements.txt /app/

RUN apt-get update
RUN pip install --no-cache-dir -r requirements.txt
# RUN pip install -r https://raw.githubusercontent.com/ultralytics/yolov5/master/requirements.txt
RUN apt-get install ffmpeg libsm6 libxext6  -y

COPY . /app/

EXPOSE 80