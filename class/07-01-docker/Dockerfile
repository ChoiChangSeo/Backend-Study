# docker 컴퓨터에 node 14 버전 설치 명령어
FROM node:14

# myfolder에 index.js를 복사 명령어
COPY ./index.js /myfolder/

# RUN(여러번 입력가능) or CMD(1번만 입력가능, 마지막에 입력되는 명령어) 명령어를 실행할 폴더
WORKDIR /myfolder/

CMD node index.js