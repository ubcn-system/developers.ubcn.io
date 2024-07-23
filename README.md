# developers.ubcn.io

유비씨엔 개발자센터 저장소입니다.

```
📘 **릴리즈노트는 서비스 배포의 일정과 내용을 기록하는 서비스 입니다.**
```

전반적인 프로세스는 다음과 같으며 유비씨엔의 모든 서비스는 해당 프로세스를 이용하고 있다고 가정합니다.
- 유비씨엔 시스템은 **사전에 공유된 일정** 또는 **정기 배포일정** 에 맞추어 배포합니다.
- 유비씨엔 시스템의 최소 개발 공수 단위는 테스트를 포함한 기간 **2주** 입니다.
- 프로젝트는 최소 **2명 이상의 개발자**가 참여합니다.
- 필요한 경우 **코드 리뷰**를 진행합니다.
- **테스트 코드**를 업로드 하지 않습니다.
- 배포 전 프로젝트를 **백업**합니다.
- **배포 전, 후 테스트**를 진행합니다.
- **팀장 또는 PM**이 배포를 승인합니다.
- **배포 후**에는 **배포 내용을 기록, 공유**합니다.

## 문서 수정하기
각 카테고리에 맞는 폴더에 문서를 추가하거나 수정하면 됩니다.
[별도의 문서](./DOCS_GUIDE.md)를 참고해 주세요.

## 개발환경 구성하기

개발자센터는 [Astro][] 기술을 활용하여 개발됐습니다.

[Astro]: https://astro.build/

## 로컬에 띄워보기

[Node.js][]와 [npm][] 또는 [pnpm]을 설치하고 아래 명령을 실행합니다.

[Node.js]: https://nodejs.org/en
[npm]: https://www.npmjs.com/
[pnpm]: https://pnpm.io/

```sh
npm install
npm start # http://localhost:4321/ 접속
npm run build
npm preview
```

--------

이 프로젝트는 [GNU Affero General Public License v3.0] 또는 그 이후 버전에 따라 라이센스가 부여됩니다. 
자세한 내용은 [COPYRIGHT] 파일을 참고하세요.

[GNU Affero General Public License v3.0]: LICENSE
[COPYRIGHT]: COPYRIGHT
