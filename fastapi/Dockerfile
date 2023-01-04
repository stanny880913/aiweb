FROM tiangolo/uvicorn-gunicorn:python3.9

WORKDIR /app

COPY requirements.txt /app/

RUN apt-get update
RUN pip install -r requirements.txt

COPY . /app/

EXPOSE 80