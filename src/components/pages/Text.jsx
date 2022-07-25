import React from 'react';
import Footer from '../layout/Footer';
import Contents from '../layout/Contents';
import TextCont from '../includes/TextCont';

function Text() {
  return (
    <>
      <Contents>
        <TextCont skill={["section", "nexon"]} />
      </Contents>
      <Footer skill={["section", "nexon", "gray"]} />
    </>
  )
}

export default Text;