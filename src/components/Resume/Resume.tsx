const Resume = () => {
  const handleDownload = () => {
    // 파일로 만들 데이터
    const data = new Blob(['여기에 파일 내용을 적으세요'], {
      type: 'text/plain',
    });

    // 다운로드 링크 생성
    const downloadUrl = URL.createObjectURL(data);

    // 임시 링크 요소 생성
    const link = document.createElement('a');
    link.href = downloadUrl;
    link.download = 'example.txt';

    // 링크를 DOM에 추가하고 클릭 이벤트를 발생시킴
    document.body.appendChild(link);
    link.click();

    // 더 이상 필요 없으므로 링크 제거
    document.body.removeChild(link);
  };

  return <button>4다운로드</button>;
};

export default Resume;
