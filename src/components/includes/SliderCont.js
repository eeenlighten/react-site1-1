import React from 'react'


const slidetxt = [
      {
        text1 : "1",
        id : 0
      },
      {
        text2 : "2",
        id : 1
      },
      {
        text3 : "3",
        id : 2
      },
      {
        text4 : "4",
        id : 3
      },
      {
        text5 : "자동플레이",
        id : 4
      },
      {
        text6 : "정지",
        id : 5
      }
] 

const slidetxt2 = [
  {
    text7 : "DEVELOPER",
    text8 : "NEW FRONTEND",
    text9 : "당신이 만들어갈 새로운 이야기",
    text10 : "당신도 할 수 있습니다.",
    text11 : "자세히 보기",
    text12 : "사이트 보기",
    id : 6
  }
]

function Slideinfo({text1, text2, text3, text4, text5, text6}){
  return (
    <>
          <div className="slider__dot">
            <a href="/" className="dot active">
              <span className="ir_pm">{text1}</span>
            </a>
            <a href="/" className="dot">
              <span className="ir_pm">{text2}</span>
            </a>
            <a href="/" className="dot">
              <span className="ir_pm">{text3}</span>
            </a>
            <a href="/" className="dot">
              <span className="ir_pm">{text4}</span>
            </a>
            <a href="/" className="play">
              <span className="ir_pm">{text5}</span>
            </a>
            <a href="/" className="stop">
              <span className="ir_pm">{text6}</span>
            </a>
          </div>
    </>
   )
}

function Slideinfo2({text7, text8, text9, text10, text11, text12}){
  return (
    <>
            <div className="desc">
              <span>{text7}</span>
              <h3>{text8}</h3>
              <p>
              {text9}
                <br /> {text10}
              </p>
              <div className="btn">
                <a href="/" className="white">
                {text11}
                </a>
                <a href="/" className="black">
                {text12}
                </a>
              </div>
            </div>
    </>
   )
}

function SliderCont(props) {
   return (
    <section id="sliderType" className={`${props.fonts[0]} ${props.fonts[1]}`}>
      <h2 className="ir_so">슬라이드 영역</h2>
      <div className="slider__inner">
        <div className="slider">
          <div className="slider__img">
          {slidetxt2.map((txt) => (
                <Slideinfo2 
                text7={txt.text7} 
                text8={txt.text8} 
                text9={txt.text9} 
                text10={txt.text10} 
                text11={txt.text11} 
                text12={txt.text12} 
                key={txt.id}
                />
              ))} 
          </div>
          <div className="slider__arrow">
            <a href="/" className="left">
              <span className="ir_pm">이전이미지</span>
            </a>
            <a href="/" className="right">
              <span className="ir_pm">다음이미지</span>
            </a>
          </div>
          {slidetxt.map((txt) => (
                <Slideinfo 
                text1={txt.text1} 
                text2={txt.text2} 
                text3={txt.text3} 
                text4={txt.text4} 
                text5={txt.text5} 
                text6={txt.text6} 
                key={txt.id}
                />
              ))}    
        </div>
      </div>
    </section>
  )
}

export default SliderCont

