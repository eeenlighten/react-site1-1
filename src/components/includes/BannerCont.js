import React from 'react'

const bannertxt = [
  {
    text1: "배너 영역",
    text2: "유튜버 웹보이",
    text3: "더 다양한 강의는 유튜브를 통해 제공하고 있습니다.",
    text4: "youtube.com/c/Webstoryboy",
    text5: "배너 영역1",
    id: 0
  }
]

function BannerInfo({id, text1, text2, text3, text4, text5}){
  return (
    <>
      <h2 className="ir_so">{text1}</h2>
      <div className="banner__inner">
        <h3 className='banner__title'>{text2}</h3>
        <p className='banner__desc'>
        {text3}
          <a href="/">{text4}</a>
        </p>
      <span className='banner__sub'>{text5}</span>
     </div>
     </>
  )
}

function BannerCont(props) {
    return (
        <section id="bannerType" className={`banner__wrap ${props.skill[0]} ${props.skill[1]}`}>
          {bannertxt.map((txt) => (
            <BannerInfo
              key = {txt.id}
              text1 = {txt.text1}
              text2 = {txt.text2}
              text3 = {txt.text3}
              text4 = {txt.text4}
              text5 = {txt.text5}
            />
          ))}
        </section>
    )
}

export default BannerCont