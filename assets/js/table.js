const tableWraper = document.querySelector('.table-content');

// const tableOfHeaders = document.querySelectorAll('.post-content > h1, h2, h3');
const tableOfHeader1 = document.querySelectorAll('.post-content h1');
// console.log(tableOfHeaders);

function replaceSymbolChar(text){
  text = text.replace( / /g , "-");
  text = text.replace( /\./g , "");
  text = text.replace( /,/g , "");
  text = text.replace( /!/g , "");
  text = text.replace( /\?/g , "");
  return text;
}

tableOfHeader1.forEach( title => {
  const li = document.createElement('li');
  const anchor = document.createElement('a');
  // 특수문자 처리
  let headerId = replaceSymbolChar(title.innerText);
  anchor.href = '#' +  headerId;
  anchor.innerText = title.innerText;
  li.append(anchor);
  tableWraper.append(li);
});