import React from "react";

const textInfor = [
  {text: "헤더 영역"},
  {text: "슬라이드 영역"},
  {text: "이미지 영역"},
  {text: "컨텐츠 영역"},
  {text: "푸터 영역"}]
  
const textinfo2 = [
  {
    text: "로그인"
  }
]

  function Info({text}){
    return (
    <>
       <li>
        <a href="/">{text}</a>
      </li>
    </>
    )
  }

function Header(props) {
  return (
    <header id="headerType" className={props.fonts}>
      <div className="header__inner">
        <h1 className="header__logo">
          <a href="/">
            WEB <em>site</em>
          </a>
        </h1>
        <nav className="header__menu">
          <h2 className="ir_so">메인 메뉴</h2>
          <ul>
          {textInfor.map((txt) => (
                <Info text={txt.text} key={txt.text}/>
              ))}      
          </ul>
        </nav>
        <div className="header__member">
          <a href="/">{textinfo2[0].text}</a>
        </div>
      </div>
    </header>
  );
}

export default Header;