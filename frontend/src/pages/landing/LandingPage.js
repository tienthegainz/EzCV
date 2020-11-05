import React from 'react';
import logo from '../../static/images/logo.svg';
import img0 from '../../static/images/screenshots/screen-1.png';
import img1 from '../../static/images/templates/castform.png';
import img2 from '../../static/images/templates/celebi.png';
import img3 from '../../static/images/templates/onyx.png';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="main">
      <div className="header">
        <div className="left">
          <img src={logo} className="logo" alt="logo" />
        </div>
        <div className="right">
          <h1>EzCV</h1>
          <p>無料な履歴書を作成するアプリ</p>
          <button>すぐ試す</button>
        </div>
      </div>
      <div className="desc">
        <p>
          去図しば謙投おッスも球加ぎトみゅ際費ソコウ豊会リんッイ触告キヌユソ毎知リラナツ情9重みぞ大価に
          質分済画づのぐう所扱3頭禁なクそ外触わ情手ル戦倉徹襲んあ。栩保ち歩青セヱ輸国融イス日協リぼ獲期
          ケヤチヘ屋照ケ相雪ひえげ正治スケノタ北87関ロセ憲度ネ人回ずびよ代他ツ教兵ざひ起95情無フネ任勉旋昔にげあま。
        </p>
      </div>
      <div className="gallery">
        <img className="screenshot" src={img0} alt="1" />
        <img className="resume" src={img1} alt="2" />
        <img className="resume" src={img2} alt="3" />
        <img className="resume" src={img3} alt="4" />
      </div>
    </div>
  );
}

export default LandingPage;