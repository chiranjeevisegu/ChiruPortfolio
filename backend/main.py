from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
# from api import chat

app = FastAPI(title="Digital Twin API")

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Allow all for mobile LAN access
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# app.include_router(chat.router, prefix="/api")

@app.get("/")
def root():
    return {"status": "Digital Twin Backend Online"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
