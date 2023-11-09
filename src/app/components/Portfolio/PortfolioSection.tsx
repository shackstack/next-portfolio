import { ReactNode } from 'react';
import PortfolioItem from './PortfolioItem';

const portfolioData: {
  id: number;
  src: string;
  title: string;
  size?: number;
  problemSituation: ReactNode;
  solvingProcess: ReactNode;
}[] = [
  {
    id: 1,
    src: 'share.png',
    title: '1. 오픈그래프 정보를 포함한 음식점 상세페이지 공유하기 기능 구현',
    problemSituation: (
      <>
        - 링크 공유 시 오픈그래프 정보를 확인하지 못하여 사용자 경험이 좋지 않은
        문제가 있었습니다.
        <br />- SPA 특성상 각 음식점에 대한 메타데이터가 담긴 html 문서를
        서버로부터 받아오지 못하여 벌어지는 상황이었습니다.
        <br />- React-helmet을 통해 동적으로 메타데이터를 주입하는 방식을
        시도해보았지만 동작하지 않았습니다.
      </>
    ),
    solvingProcess: (
      <>
        - Next.js를 이용하여 서버에서 메타데이터를 동적으로 주입시킨 HTML 문서를
        만들어 사용자가 접속 시 실제 페이지로 리다이렉트하는 방식을 통해
        공유하기 기능을 구현했습니다.
      </>
    ),
  },
  {
    id: 2,
    src: '',
    title: '2. 번들 사이즈 최적화를 통한 로딩 성능 개선',
    problemSituation: (
      <>
        - 기능이 점점 추가되면서 번들의 크기가 커졌고 인한 초기로딩속도가
        지연되는 문제를 겪었습니다.
      </>
    ),
    solvingProcess: (
      <>
        - 페이지 단위로 React.lazy를 적용하여 code-splitting을 진행하였습니다.
        <br />
        - package.json에 sideEffects 속성을 false로 지정하여 tree-shaking을
        진행하였습니다.
        <br />- 또한 production 모드로 빌드 시 development 모드에서만 사용되는
        코드들을 빌드 결과물에 포함되지 않도록 <br />
        process.env.NODE_ENV === `development` 로 분기처리하여 tree-shaking을
        진행하였습니다.
        <br /> - 자바스크립트 번들 사이즈 125.56KB ⇒ 90.6KB
      </>
    ),
  },
  {
    id: 3,
    src: 'hover.png',
    size: 800,
    title: '3. 전역상태를 이용한 리스트와 지도 상호작용 기능 구현',
    problemSituation: (
      <>
        - 리스트에 있는 음식점이 지도상 어디에 위치하는지 확인하기 어려워 사용자
        경험이 좋지 않은 문제가 있었습니다.
      </>
    ),
    solvingProcess: (
      <>
        - 전역상태로 현재 hover된 음식점에 대한 id값을 관리하였습니다.
        <br />- 마커의 props로 해당 전역상태를 넘겨주어 일치하는 경우 강조되는
        효과를 주어 해당 음식점이 지도상 어디에 위치하는지 쉽게 인식할 수 있도록
        하였습니다.
      </>
    ),
  },

  {
    id: 4,
    src: '',
    size: 0,
    title: '4. 개발 의존성 분리를 위한 MSW 도입',
    problemSituation: (
      <>
        - 프로젝트 초기에 백엔드의 작업 진행 속도가 프론트엔드보다 빨라, 개발
        서버를 기반으로 작업을 전개하였습니다.
        <br />- 그러나 프론트엔드의 작업 속도가 점차 백엔드를 따라잡게 되면서,
        아직 준비되지 않은 개발 서버로 인해 프론트엔드 작업에 차질이 생기기
        시작했습니다.
      </>
    ),
    solvingProcess: (
      <>
        - 백엔드의 API 구현 상태에 구애받지 않고, 프론트엔드 개발이 원활하게
        진행될 수 있도록 MSW를 도입하였습니다.
        <br />- 이를 통해 독립적인 환경에서의 개발이 가능하게 되었습니다.
      </>
    ),
  },
  {
    id: 5,
    src: 'skeleton.png',
    size: 800,
    title: '5. Skeleton UI을 이용한 CLS 개선 및 사용자 경험 개선',
    problemSituation: (
      <>
        - 메인페이지에서 추천 맛집을 불러오는 과정에서 Layout-Shift가 발생하면서
        사용자 경험이 좋지 않은 문제가 있었습니다.
      </>
    ),
    solvingProcess: (
      <>
        - 데이터가 Fetch되기 전 음식점 카드 컴포넌트를 Skeleton UI로 대체하여
        CLS를 개선하였습니다.
        <br />- 이를 통해 콘텐츠가 로드되는 동안 사용자에게 시각적인 피드백을
        제공함으로써 사용자 경험도 개선시킬 수 있었습니다.
        <br />- 메인페이지 CLS 0.066 ⇒ 0
      </>
    ),
  },
  {
    id: 6,
    src: '',
    size: 0,
    title:
      '6. 시맨틱 태그, aria-label, 이미지 대체 텍스트 적용으로 웹 접근성 개선',
    problemSituation: (
      <>
        - 시각장애인의 입장에서 눈을 감은 채로 스크린 리더기를 통해 QA를 진행한
        결과, 정보에 접근하는데 어려움이 있었습니다.
      </>
    ),
    solvingProcess: (
      <>
        - 시맨틱 태그를 적용함으로써, 웹 페이지의 구조를 더 명확하게 표현할 수
        있게 되었습니다. 예를 들어, `header`, `footer`, `nav`, `article`,
        `section과` 같은 태그들은 페이지 내에서 각 콘텐츠의 역할을 명확히 해주어
        스크린 리더 사용자들이 페이지의 개요를 더 쉽게 이해할 수 있도록
        하였습니다.
        <br />- aria-label을 적용함으로써, 비텍스트 콘텐츠에 대한 명확한 설명을
        제공하게 되었습니다. 이를 통해 각 요소의 기능과 목적을 이해할 수 있게
        되어 웹 페이지 내에서의 탐색이 용이해졌습니다.
        <br />- 이미지 대체 텍스트를 적용함으로써 이미지 콘텐츠를 볼 수 없는
        사용자들도 스크린 리더를 통해 이미지에 대한 설명을 들을 수 있게
        되었습니다. 이를 통해 이미지가 전달하고자 하는 주요 메시지나 기능을
        이해하는데 도움을 주어, 정보 접근성을 용이하게 하였습니다.
      </>
    ),
  },
  {
    id: 7,
    src: '',
    size: 0,
    title: '7. 네트워크 waterfall로 인한 음식점 상세페이지 로딩 지연 문제 개선',
    problemSituation: (
      <>
        - 재사용 가능성이 없는 경우 컴포넌트를 분리하지 않다보니 음식점
        상세페이지 컴포넌트는 매우 복잡해졌습니다.
        <br />
        - 음식점 상세페이지는 5개의 useQuery를 처리하는 비즈니스 로직을 갖게
        되었고, 순차적으로 네트워크 요청이 처리되는 waterfall 문제가
        발생했습니다.
        <br />- 이로 인해 페이지 로딩속도가 지연되어 사용자 경험이 좋지
        않았습니다.
      </>
    ),
    solvingProcess: (
      <>
        - 음식점 정보, 셀럽이 다녀간 다른 맛집, 주변 맛집 등 관심사에 맞게
        컴포넌트를 분리하였습니다.
        <br />- 특정 컴포넌트에서 비동기 요청이 여러개인경우 useQueries를
        사용하여 네트워크 요청이 병렬적으로 처리되도록 하였습니다.
        <br />- 3G 환경에서의 마지막 요청 시작시간이 13초 ⇒ 7초로
        개선되었습니다.
      </>
    ),
  },
];

const PortfolioSection = () => {
  return (
    <section id='portfolio' className='pt-24 min-h-screen'>
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>
        My portfolio
      </h2>
      {portfolioData.map(({ id, ...data }) => {
        return <PortfolioItem key={id} {...data} isImage={data.src !== ''} />;
      })}
    </section>
  );
};

export default PortfolioSection;
