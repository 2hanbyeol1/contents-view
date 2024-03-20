import './NotFound.scss';
import { useNavigate, Link } from 'react-router-dom';

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="not-found-container">
      <div className="contents-container">
        <div className="error-id">🚨 404 🚨</div>
        <div className="error-title">페이지를 찾을 수 없습니다.</div>
        <div className="error-description">
          주소가 잘못 입력되었거나, 주소의 변경 또는 삭제로 인해 사용하실 수
          없습니다.
          <br /> 입력하신 페이지의 주소가 정확한지 다시 한번 확인해 주세요.
        </div>
        <div className="btn-group">
          <a
            className="btn-back"
            onClick={() => {
              navigate(-1);
            }}
          >
            돌아가기
          </a>
          <Link className="btn-main" to="">
            메인화면
          </Link>
        </div>
      </div>
    </div>
  );
}
