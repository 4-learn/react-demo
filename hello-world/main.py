from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List
from datetime import datetime, timedelta
import random

app = FastAPI()

# 設置 CORS 中間件
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 允許所有來源。你可以根據需要設置特定的來源。
    allow_credentials=True,
    allow_methods=["*"],  # 允許所有方法（GET、POST 等）
    allow_headers=["*"],  # 允許所有標頭
)

# Authorization token
AUTH_TOKEN = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJodHRwczovL2V4YW1wbGUuYXV0aDAuY29tLyIsImF1ZCI6Imh0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2NhbGFuZGFyL3YxLyIsInN1YiI6InVzcl8xMjMiLCJpYXQiOjE0NTg3ODU3OTYsImV4cCI6MTQ1ODg3MjE5Nn0.CA7eaHjIHz5NxeIJoFK9krqaeZrPLwmMmgI_XiQiIkQ"

# 模擬感測器數據
def generate_sensor_data():
    now = datetime.now()
    return [
        {
            "timestamp": (now - timedelta(hours=2)).isoformat(),
            "device": "Device_A",
            "temperature": f"{random.randint(25, 40)}°C"
        },
        {
            "timestamp": (now - timedelta(hours=1)).isoformat(),
            "device": "Device_B",
            "temperature": f"{random.randint(25, 40)}°C"
        },
        {
            "timestamp": now.isoformat(),
            "device": "Device_C",
            "temperature": f"{random.randint(25, 40)}°C"
        },
    ]

# 定義請求模型
class SensorRequest(BaseModel):
    authorization: str

# 定義響應模型
class SensorData(BaseModel):
    timestamp: str
    device: str
    temperature: str

@app.post("/sensor", response_model=List[SensorData])
async def get_sensor_data(request: SensorRequest, authorization: str = Header(...)):
    if authorization != AUTH_TOKEN:
        raise HTTPException(status_code=401, detail="Unauthorized")

    return generate_sensor_data()

# 啟動應用
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8344)
