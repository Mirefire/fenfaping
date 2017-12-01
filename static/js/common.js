(function (win,doc) {
        function setSize() {
          doc.documentElement.style.fontSize=20*document.documentElement.clientWidth/375+'px';
        }
        setSize();
        win.addEventListener('resize',setSize,false)
      })(window,document)