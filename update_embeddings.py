import json
import numpy as np
from openai import OpenAI
import os
from dotenv import load_dotenv

# .env 파일 읽기
load_dotenv()

# 1. OpenAI 클라이언트 초기화
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# 2. 포트폴리오 데이터 불러오기
with open("src/data/portfolio.json", "r", encoding="utf-8") as f:
    portfolio_data = json.load(f)

embeddings = []

# 3. 각 문장에 대해 임베딩 생성
for item in portfolio_data:
    text = item["text"]
    response = client.embeddings.create(
        model="text-embedding-3-small",
        input=text
    )
    vector = response.data[0].embedding

    embeddings.append({
        "id": item["id"],
        "type": item["type"],
        "text": text,
        "embedding": vector
    })

# 4. 결과 저장
with open("src/data/portfolio_embeddings.json", "w", encoding="utf-8") as f:
    json.dump(embeddings, f, ensure_ascii=False, indent=2)

print(f"✅ 총 {len(embeddings)}개 항목 임베딩 완료!")
