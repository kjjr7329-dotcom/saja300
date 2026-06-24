# 하루 1분 사자성어 마스터 🐯

사자성어 학습 무료 웹앱 — 스토리해커(Storyhacker)

## 파일 구조
```
saja300/
├── index.html   ← 앱 본체 (수정 필요 없음)
├── data.json    ← 사자성어 데이터 (377개)
└── README.md
```

## 데이터 업데이트 방법

1. 엑셀(사자성어_앱데이터_정리본.xlsx) 수정
2. Claude에게 파일 주고 "data.json 다시 만들어줘" 요청
3. GitHub에 data.json 덮어쓰기 → 자동 반영

## 유튜브 URL 추가 방법

엑셀의 `유튜브_쇼츠_URL` 컬럼에 URL 붙여넣기 후 data.json 재생성

## Vercel 배포

- GitHub 레포: `kjjr7329-dotcom/saja300`
- Vercel 연결 후 자동 배포
- 도메인: `saja300.vercel.app` (또는 커스텀)
