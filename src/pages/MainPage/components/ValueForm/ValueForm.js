import React from "react";

import './styles.css';

export default function ValueForm() {
  return (
    <div className="value-section">
        <div className="value-grid">
            <div className="value-item" id="item1">
                <div className="overlay">
                    <h2>실시간 동영상 스트리밍</h2>
                    <p>스트리밍을 통해 직접 작물을 키우는 느낌을 받을 수 있습니다.</p>
                </div>
            </div>
            <div className="value-item" id="item2">
                <div className="overlay">
                    <h2>작물 재배 체험 서비스</h2>
                    <p>체험 서비스 신청을 통해 작물을 재배하는 체험이 가능합니다.</p>
                </div>
            </div>
            <div className="value-item" id="item3">
                <div className="overlay">
                    <h2>힐림 팜 커뮤니티 서비스</h2>
                    <p>내 힐림 팜 작물을 자랑하고 상태를 공유할 수 있습니다.</p>
                </div>
            </div>
            <div className="value-item" id="item4">
                <div className="overlay">
                    <h2>작물 상태 알람 서비스</h2>
                    <p>작물의 생육상태와 병충해 상태를 알림으로 받을 수 있습니다.</p>
                </div>
            </div>
        </div>
    </div>
  );
}
