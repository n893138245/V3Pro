// 导航：自定义：切换中英文
var nav_languageBtn = document.querySelector('.nav_languageBtn')
nav_languageBtn.onclick = function() {
  console.log('test20240131');
  if (this.textContent === 'English') {
    nav_languageBtn.innerHTML = '中文简体'
    window.location.href ='#/en/'
  } else {
    nav_languageBtn.innerHTML = 'English'
    window.location.href ='#/'
  }
}

// 导航：自定义：pdf文件下载
var nav_downloadPdfBtn = document.querySelector('.nav_downloadPdfBtn')
// nav_downloadPdfBtn.onclick = function() {
nav_downloadPdfBtn.onclick = downloadPdf()
function downloadPdf() {
  // 获取 Markdown 内容
  const markdownContent = document.querySelector('.markdown-section').innerHTML;
  // 使用 html2pdf.js 将 Markdown 内容转换为 PDF
  html2pdf(markdownContent, {
    margin: 1, // 边距
     filename: 'V3Pro.pdf', // pdf下载文件名
    // filename: {
      // '/en/': 'V3Pro User Manual.pdf',
      // '/': 'V3Pro用户手册.pdf',
    // },
    image: {
      // type: 'jpeg',
      type: ['jpeg', 'png'], // 重要解决：网络图片不能pdf导出的问题，因其不支持png图片，我上传jpeg图片至s3以后，就能正常导出了。
      quality: 1,
    }, // 图像类型、质量
    html2canvas: {
      scale: 2,
      useCORS: true, // 支持跨域，网络图片也可以导出pdf。国外的好像不行

      // 暂不设置
      // allowTaint: false,
      // logging: false,
      // letterRendering: true,
      // ddpi: window.devicePixelRatio * 4, //将分辨率提高到特定的DPI 提高四倍
      // scale: 4, //按比例增加分辨率
      // background: 'red' //pdf背景色为白色，默认是黑色的
    }, // 配置选项直接发送到html2canvas
    jsPDF: {
      unit: 'mm', 
      format: 'a4', 
      orientation: 'portrait', // portrait、landscape
    }, // 属性参考：https://rawgit.com/MrRio/jsPDF/master/docs/jsPDF.html
   });
}

// 导航：默认：pdf文件下载
function nav_downloadPdfBtnClick() {
  downloadPdf()
  // let userConfirmation = confirm('确认下载pdf文件?');
  // if (userConfirmation) {
  //   console.log('success')
  // } else {
  //   console.log('cancel')
  // }
}