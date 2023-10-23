$(document).ready(function(){
  //Definition Start
    $("#erase").click(function(){
        $("#submit").empty();
      });
      $("#tesDefinisi").click(function(){
        let defv = document.getElementById("def-p").value;
        let defx = document.getElementById("def-q").value;
        let defy = document.getElementById("def-m").value;
        let i=0;
       if (!defv || !defx || !defy) {
          window.alert('ada bagian yang kosong');
        } else if (defy==0) {
          window.alert('tidak bisa mod 0');
        } else {
          defx = Number(defx);
          defy = Number(defy);
          defv = Number(defv);
          if (isNaN(defx) || isNaN(defy) || isNaN(defv) ) {
            window.alert('silahkan masukkan suatu bilangan');
          } else if ((defv-defx)%defy==0){
              let defz = defv-defx;
              let defg = "benar, " + defv + " &Congruent; " + defx + " mod (" + defy + ")" + " karena " + defy + " | " + defv + " - " + defx + " atau " + defy + " | " + defz + "<br>";
              $("#submit").append(defg);
          } else {
              let defz = defv-defx;
              let defg = " salah, " + defv + " &NotCongruent; " + defx + " mod (" + defy + ")" + " karena " + defy + " &nmid; " + defv + " - " + defx + " atau " + defy + " &nmid; " + defz +"<br>";
              $("#submit").append(defg);
          }
        }
      });
  //Definition End

  // Theorm 1 Start
  $("#eraseTheormOne").click(function(){
    $("#submitTheormOne").empty();
  });
  $("#testTheormOne").click(function(){
    let v = document.getElementById("theormOnep").value;
    let x = document.getElementById("theormOneq").value;
    let y = document.getElementById("theormOnem").value;
   if (!v || !x || !y) {
      window.alert('ada bagian yang kosong');
    } else if ( y<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
      x = Number(x);
      y = Number(y);
      v = Number(v);
      if (isNaN(x) || isNaN(y) || isNaN(v) ) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(v)) {
        window.alert('silahkan input bilangan bulat');
      }
       else if ((v-x)%y==0){
          const r=(v-x)/y;
          let z = v-x;
          let g = v + " &Congruent; " + x + " mod (" + y + ")" + " sama artinya dengan " + v + "=" + y + "." + r + "+" + x + "<br>";
          $("#submitTheormOne").append(g);
      } else {
          let z = v-x;
          let g =  v + " &NotCongruent; " + x + " mod (" + y + ")" + " sebab tidak ada bilangan bulat x sedemikian rupa sehingga " + v + "=" + y + ". x +" + x +"<br>";
          $("#submitTheormOne").append(g);
      }
    }
  });
  // Theorm 1 End

  // Theorm 2 Start
  const testeo2a = document.querySelector("#testeorema2a");
  testeo2a.addEventListener("click", function testheorm2a() {
    let v = document.getElementById("teo2pa").value;
        let x = document.getElementById("teo2ma").value;
        if (!v || !x ) {
          window.alert('ada bagian yang kosong');
        } else if ( x<=0) {
            window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
        } else {
          x = Number(x);
          v = Number(v);
          if (isNaN(x) ||  isNaN(v) ) {
            window.alert('silahkan masukkan suatu bilangan');
          } else if(!Number.isInteger(x) || !Number.isInteger(v)) {
            window.alert('silahkan input bilangan bulat');
          } else {
            let g = v + "&Congruent;" + v +  " mod (" + x + ")" + "<br/>" ;
              $("#submiteo2a").append(g);
          }
          
        }
  });

  const eraseteo2a = document.querySelector("#erase-teo2a");
  const submiteo2a = document.querySelector("#submiteo2a");
  eraseteo2a.addEventListener("click",function eraseeo2a() {
    submiteo2a.innerHTML = "";
  });

  const testeo2b = document.querySelector("#testeorema2b");
  testeo2b.addEventListener("click", function testheorm2b() {
	  let v = document.getElementById("teo2pb").value;
    let x = document.getElementById("teo2qb").value;
    let y = document.getElementById("teo2mb").value;
    if (!v || !x || !y) {
      window.alert('ada bagian yang kosong');
    } else if ( y<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
      x = Number(x);
      y = Number(y);
      v = Number(v);
      if (isNaN(x) || isNaN(y) || isNaN(v) ) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(x) || !Number.isInteger(y) || !Number.isInteger(v)) {
        window.alert('silahkan input bilangan bulat');
      }
        else if ((v-x)%y==0){
          const r=(v-x)/y;
          let z = v-x;
          let g = v + " &Congruent; " + x + " mod (" + y + ")" + " akibatnya " + x + " &Congruent; " + v + " mod (" + y + ")" + "<br>";
          $("#submiteo2b").append(g);
      } else {
          let z = v-x;
          let g =  v + " &NotCongruent; " + x + " mod (" + y + ")" +"<br>";
          $("#submiteo2b").append(g);
      }
    }
  });

  const eraseteo2b = document.querySelector("#eraseteo2b");
  const submiteo2b = document.querySelector("#submiteo2b");
  eraseteo2b.addEventListener("click",function eraseeo2b() {
    submiteo2b.innerHTML = "";
  });

  const testeo2c = document.querySelector("#testeorema2c");
  testeo2c.addEventListener("click", function testheorm2c() {
	  let p = document.getElementById("teo2pc").value;
    let q1 = document.getElementById("teo2qc").value;
    let m1 = document.getElementById("teo2mc").value;
    let q2 = document.getElementById("teo2qcc").value;
    let r = document.getElementById("teo2rc").value;
    let m2 = document.getElementById("teo2mcc").value;
    if (!p || !q1 || !m1 || !q2 || !r || !m2 ) {
      window.alert('ada bagian yang kosong');
    } else if ( m1<=0 || m2<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
        p = Number(p);
        q1 = Number(q1);
        m1 = Number(m1);
        q2 = Number(q2);
        r = Number(r);
        m2 = Number(m2);           
      
      if (isNaN(p) || isNaN(q1) || isNaN(m1) || isNaN(q2) || isNaN(r) || isNaN(m2)) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(p) || !Number.isInteger(q1) || !Number.isInteger(m1) || !Number.isInteger(r) || !Number.isInteger(q2) || !Number.isInteger(m2)) {
        window.alert('silahkan input bilangan bulat');
      } else if (q1!=q2){
        window.alert('nilai q tidak sama');
    } else if (m1!=m2){
        window.alert('nilai m tidak sama');
    }else if ((p-q1)%m1!=0){
          let g = p + "&NotCongruent;" + q1 + "mod ("+ m1 +")"+ "<br />";
          $("#submiteo2c"). append(g);
      } else if ((q2-r)%m2!=0){
        let g = q2 + "&NotCongruent;" + r + "mod ("+ m2 +")" + "<br />";
        $("#submiteo2c").append(g);
      } else {
          let g = p + "&Congruent;" + q1 + "mod ("+ m1 +")"+q2 + "&Congruent;" + r + "mod ("+ m2 +")" + "maka" + p + "&Congruent;" + r + "mod ("+ m1 +")"+ "<br />";
          $("#submiteo2c"). append(g);
      }
    }
  });

  const eraseteo2c = document.querySelector("#eraseteo2c");
  const submiteo2c = document.querySelector("#submiteo2c");
  eraseteo2c.addEventListener("click",function eraseeo2c() {
    submiteo2c.innerHTML = "";
  });

  const q1 = document.getElementById("teo2qc");
  let m1 = document.getElementById("teo2mc");
  const q2 = document.getElementById("teo2qcc");
  let m2 = document.getElementById("teo2mcc");

  q1.addEventListener("keyup", function changeq2() {
    q2.value = q1.value;
  });
  m1.addEventListener("keyup", function changem2() {
    m2.value = m1.value;
  });

  // Theorm 2 End

  // Theorm 3 Start
  const testeo3a = document.querySelector("#testeorema3a");
  let listTheorm3a = "";
  testeo3a.addEventListener("click", function testheorm3() {
	  let teorema3pa = document.getElementById("teorema3-pa").value;
    let teorema3qa = document.getElementById("teorema3-qa").value;
    let teorema3ma = document.getElementById("teorema3-ma").value;
    let teorema3ra = document.getElementById("teorema3-ra").value;
    let i=0;
    if (!teorema3pa || !teorema3qa || !teorema3ma || !teorema3ra) {
      window.alert('ada bagian yang kosong');
    } else if ( teorema3ma<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
      teorema3pa = Number(teorema3pa);
      teorema3qa = Number(teorema3qa);
      teorema3ma = Number(teorema3ma);
      teorema3ra = Number(teorema3ra);
      if (isNaN(teorema3pa) || isNaN(teorema3qa) || isNaN(teorema3ma) || isNaN(teorema3ra) ) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(teorema3pa) || !Number.isInteger(teorema3qa) || !Number.isInteger(teorema3ma) || !Number.isInteger(teorema3ra)) {
        window.alert('silahkan input bilangan bulat');
      }
        else if ((teorema3pa-teorema3qa)%teorema3ma==0){
        let teorema3va = teorema3pa+teorema3ra; let teorema3wa = teorema3qa+teorema3ra;
          let teorema3ga = teorema3pa + " &Congruent; " + teorema3qa + " mod ("+ teorema3ma + ")" + " maka " + teorema3pa + "+" + teorema3ra + " &Congruent; " + teorema3qa + "+" + teorema3ra + " mod (" + teorema3ma + ")" + " atau " + teorema3va + " &Congruent; " + teorema3wa + " mod ("+ teorema3ma + ")" +"<br />";
          $("#submit-teorema3a").append(teorema3ga);
      } else {
          let teorema3ga =  teorema3pa + " &NotCongruent; " + teorema3qa + " mod (" + teorema3ma + ")" +"<br>";
          $("#submit-teorema3a").append(teorema3ga);
      }
    }
  });

  const erasetheo3a = document.querySelector("#erase-teorema3a");
  const submittheo3a = document.querySelector("#submit-teorema3a");

  erasetheo3a.addEventListener("click", function eraset3() {
    submittheo3a.innerHTML = "";
  });

  const testeo3b = document.querySelector("#testeorema3b");
  testeo3b.addEventListener("click", function testheorm(){
	  let p = document.getElementById("teorema3-pb").value;
    let q = document.getElementById("teorema3-qb").value;
    let m = document.getElementById("teorema3-mb").value;
    let r = document.getElementById("teorema3-rb").value;
    let i=0;
    if (!p || !q || !m || !r) {
      window.alert('ada bagian yang kosong');
    } else if ( m<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
      p = Number(p);
      q = Number(q);
      m = Number(m);
      r = Number(r);
      if (isNaN(p) || isNaN(q) || isNaN(m) || isNaN(r) ) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(p) || !Number.isInteger(q) || !Number.isInteger(m) || !Number.isInteger(r)) {
        window.alert('silahkan input bilangan bulat');
      }
        else if ((p-q)%m==0){
        let v = p-r; let w = q-r;
          let g = p + " &Congruent; " + q + " mod ("+ m + ")" + " maka " + p + "-" + r + " &Congruent; " + q + "-" + r + " mod (" + m + ")" + " atau " + v + " &Congruent; " + w + " mod ("+ m + ")" +"<br />";
          $("#submit-teorema3b").append(g);
      } else {
          let g =  p + " &NotCongruent; " + q + " mod (" + m + ")" +"<br>";
          $("#submit-teorema3b").append(g);
      }
    }
  });

  const erasetheo3b = document.querySelector("#erase-teorema3b");
  const submittheo3b = document.querySelector("#submit-teorema3b");
  erasetheo3b.addEventListener("click", function eraset3() {
    submittheo3b.innerHTML = "";
  });

  const testeo3c = document.querySelector("#testeorema3c");
  testeo3c.addEventListener("click", function testheorm(){
	  let p = document.getElementById("teorema3-pc").value;
    let q = document.getElementById("teorema3-qc").value;
    let m = document.getElementById("teorema3-mc").value;
    let r = document.getElementById("teorema3-rc").value;
    let i=0;
    if (!p || !q || !m || !r) {
      window.alert('ada bagian yang kosong');
    } else if ( m<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
      p = Number(p);
      q = Number(q);
      m = Number(m);
      r = Number(r);
      if (isNaN(p) || isNaN(q) || isNaN(m) || isNaN(r) ) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(p) || !Number.isInteger(q) || !Number.isInteger(m) || !Number.isInteger(r)) {
        window.alert('silahkan input bilangan bulat');
      }
        else if ((p-q)%m==0){
        let v = p*r; let w = q*r;
          let g = p + " &Congruent; " + q + " mod ("+ m + ")" + " maka " + p + "." + r + " &Congruent; " + q + "." + r + " mod (" + m + ")" + " atau " + v + " &Congruent; " + w + " mod ("+ m + ")" +"<br />";
          $("#submit-teorema3c").append(g);
      } else {
          let g =  p + " &NotCongruent; " + q + " mod (" + m + ")" +"<br>";
          $("#submit-teorema3c").append(g);
      }
    }
  });

  const erasetheo3c = document.querySelector("#erase-teorema3c");
  const submittheo3c = document.querySelector("#submit-teorema3c");
  erasetheo3c.addEventListener("click", function eraset3() {
    submittheo3c.innerHTML = "";
  });
  // Theorm 3 End

  // Theorm 4 Start
  
  const testeo4a = document.querySelector("#testeo4a");
  testeo4a.addEventListener("click", function teseo4a() {
    let p = document.getElementById("teo4pa").value;
    let q = document.getElementById("teo4qa").value;
    let m1 = document.getElementById("teo4ma").value;
    let r = document.getElementById("teo4ra").value;
    let s = document.getElementById("teo4sa").value;
    let m2 = document.getElementById("teo4ma2").value;
    let i=0;
    if (!p || !q || !m1 || !r || !s || !m2 ) {
      window.alert('ada bagian yang kosong');
    } else if ( m1<=0 || m2<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
        p = Number(p);
        q = Number(q);
        m1 = Number(m1);
        r = Number(r);
        s = Number(s);
        m2 = Number(m2);           
      
      if (isNaN(p) || isNaN(q) || isNaN(m1) || isNaN(r) || isNaN(s) || isNaN(m2)) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(p) || !Number.isInteger(q) || !Number.isInteger(m1) || !Number.isInteger(r) || !Number.isInteger(s) || !Number.isInteger(m2)) {
        window.alert('silahkan input bilangan bulat');
      } else if (m1!=m2){
        window.alert('nilai m tidak sama');
      } else if ((p-q)%m1!=0){
          let g = p + "&NotCongruent;" + q + " mod ("+ m1 +")"+ "<br />";
          $("#submiteo4a"). append(g);
      } else if ((r-s)%m2!=0){
        let g = r + "&NotCongruent;" + s + " mod ("+ m2 +")" + "<br />";
        $("#submiteo4a").append(g);
      } else {
        let v = p+r;
        let w = q+s;
        let g = p + "&Congruent;" + q + " mod ("+ m1 +")"+ " dan " + r + "&Congruent;" + s + " mod ("+ m2 +")" + " maka " + p + "+" + r + "&Congruent;" + q + "+" + s + " mod ("+ m1 +")" + " atau " + v + "&Congruent;" + w + " mod ("+ m1+ ")" +"<br />";
        $("#submiteo4a").append(g);
      }
    }
  });

  const submiteo4 = document.querySelector("#submiteo4a");
  const eraseo4 = document.querySelector("#eraseo4a");
  eraseo4.addEventListener("click", function eraseeo4() {
    submiteo4.innerHTML = "";
  });

  const m4 = document.getElementById("teo4ma");
  const m42 = document.getElementById("teo4ma2");
  m4.addEventListener("keyup", function changem4a() {
    m42.value = m4.value;
  });

  const testeo4b = document.querySelector("#testeo4b");
  testeo4b.addEventListener("click", function teseo4b() {
	let p = document.getElementById("teo4pb").value;
    let q = document.getElementById("teo4qb").value;
    let m1 = document.getElementById("teo4mb").value;
    let r = document.getElementById("teo4rb").value;
    let s = document.getElementById("teo4sb").value;
    let m2 = document.getElementById("teo4mb2").value;
    let i=0;
    if (!p || !q || !m1 || !r || !s || !m2 ) {
      window.alert('ada bagian yang kosong');
    } else if ( m1<=0 || m2<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
        p = Number(p);
        q = Number(q);
        m1 = Number(m1);
        r = Number(r);
        s = Number(s);
        m2 = Number(m2);           
      
      if (isNaN(p) || isNaN(q) || isNaN(m1) || isNaN(r) || isNaN(s) || isNaN(m2)) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(p) || !Number.isInteger(q) || !Number.isInteger(m1) || !Number.isInteger(r) || !Number.isInteger(s) || !Number.isInteger(m2)) {
        window.alert('silahkan input bilangan bulat');
      } else if (m1!=m2){
        window.alert('nilai m tidak sama');
    }else if ((p-q)%m1!=0){
          let g = p + "&NotCongruent;" + q + "mod ("+ m1 +")"+ "<br />";
          $("#submiteo4b"). append(g);
      } else if ((r-s)%m2!=0){
        let g = r + "&NotCongruent;" + s + "mod ("+ m2 +")" + "<br />";
        $("#submiteo4b").append(g);
      } else {
      let v = p-r;
      let w = q-s;
          let g = p + "&Congruent;" + q + "mod ("+ m1 +")"+ " dan " + r + "&Congruent;" + s + "mod ("+ m2 +")" + " maka " + p + "-" + r + "&Congruent;" + q + "-" + s + "mod ("+ m1 +")" + " atau " + v + "&Congruent;" + w + "mod ("+ m1+ ")" +"<br />";
          $("#submiteo4b"). append(g);
      }
    }
  });

  const submiteo4b = document.querySelector("#submiteo4b");
  const eraseo4b = document.querySelector("#eraseo4b");
  eraseo4b.addEventListener("click", function eraseeo4b() {
    submiteo4b.innerHTML = "";
  });

  const m4b = document.getElementById("teo4mb");
  const m42b = document.getElementById("teo4mb2");
  m4b.addEventListener("keyup", function changem4b() {
    m42b.value = m4b.value;
  });

  const testeo4c = document.querySelector("#testeo4c");
  testeo4c.addEventListener("click", function teseo4c() {
	  let p = document.getElementById("teo4pc").value;
    let q = document.getElementById("teo4qc").value;
    let m1 = document.getElementById("teo4mc").value;
    let r = document.getElementById("teo4rc").value;
    let s = document.getElementById("teo4sc").value;
    let m2 = document.getElementById("teo4mc2").value;
    let i=0;
    if (!p || !q || !m1 || !r || !s || !m2 ) {
      window.alert('ada bagian yang kosong');
    } else if ( m1<=0 || m2<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
        p = Number(p);
        q = Number(q);
        m1 = Number(m1);
        r = Number(r);
        s = Number(s);
        m2 = Number(m2);           
      
      if (isNaN(p) || isNaN(q) || isNaN(m1) || isNaN(r) || isNaN(s) || isNaN(m2)) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(p) || !Number.isInteger(q) || !Number.isInteger(m1) || !Number.isInteger(r) || !Number.isInteger(s) || !Number.isInteger(m2)) {
        window.alert('silahkan input bilangan bulat');
      } else if (m1!=m2){
        window.alert('nilai m tidak sama');
      } else if ((p-q)%m1!=0){
        let g = p + "&NotCongruent;" + q + "mod ("+ m1 +")"+ "<br />";
        $("#submiteo4c"). append(g);
      } else if ((r-s)%m2!=0){
        let g = r + "&NotCongruent;" + s + "mod ("+ m2 +")" + "<br />";
        $("#submiteo4c").append(g);
      } else {
        let v = p*r;
        let w = q*s;
        let g = p + "&Congruent;" + q + " mod ("+ m1 +")"+ " dan " + r + "&Congruent;" + s + " mod ("+ m2 +")" + " maka " + p + "&times;" + r + "&Congruent;" + q + "&times;" + s + " mod ("+ m1 +")" + " atau " + v + "&Congruent;" + w + " mod ("+ m1+ ")" +"<br />";
        $("#submiteo4c").append(g);
      }
    }
  });

  const eraseo4c = document.querySelector("#eraseo4c");
  eraseo4c.addEventListener("click", function eraseeo4c() {
    document.querySelector("#submiteo4c").innerHTML = "";
  });

  const m4c = document.getElementById("teo4mc");
  const m42c = document.getElementById("teo4mc2");
  m4c.addEventListener("keyup", function changem4c() {
    m42c.value = m4c.value;
  });
  // Theorm 4 End

  // Theorm 5 Start
  $("#tes5a").click(function(){
    let p = document.getElementById("teo5pa").value;
    let q = document.getElementById("teo5qa").value;
    let m = document.getElementById("teo5ma").value;
    let r = document.getElementById("teo5ra").value;
    if (!p || !q || !m || !r) {
      window.alert('ada bagian yang kosong');
    } else if ( m<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
      p = Number(p);
      q = Number(q);
      m = Number(m);
      r = Number(r);
      if (isNaN(p) || isNaN(q) || isNaN(m) || isNaN(r) ) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(p) || !Number.isInteger(q) || !Number.isInteger(m) || !Number.isInteger(r)) {
        window.alert('silahkan input bilangan bulat');
      }
       else if ((p-q)%m==0){
       let v = p*r; let w = q*r; let o=m*r;
          let g = p + " &Congruent; " + q + " mod ("+ m + ")" + " maka " + p + "." + r + " &Congruent; " + q + "." + r + " mod (" + m + "." + r + ")" + " atau " + v + " &Congruent; " + w + " mod ("+ o + ")" +"<br />";
          $("#submit5a").append(g);
      } else {
          let g =  p + " &NotCongruent; " + q + " mod (" + m + ")" +"<br>";
          $("#submit5a").append(g);
      }
    }
  });
  
  $("#tes5b").click(function(){
    let p = document.getElementById("teo5pb").value;
    let q = document.getElementById("teo5qb").value;
    let m = document.getElementById("teo5mb").value;
    let d = document.getElementById("teo5db").value;
    let r = document.getElementById("teo5rb").value;
    let i=0;
   if (!p || !q || !m || !d || !r) {
      window.alert('ada bagian yang kosong');
    } else if ( m<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
      p = Number(p);
      q = Number(q);
      m = Number(m);
      d = Number(d);
      r = Number(r);
      if (isNaN(p) || isNaN(q) || isNaN(m) || isNaN(d) || isNaN(r) ) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(p) || !Number.isInteger(q) || !Number.isInteger(m) || !Number.isInteger(d) || !Number.isInteger(r)) {
        window.alert('silahkan input bilangan bulat');
      } else if (m!==r) {
          window.alert(`Nilai m tidak sama`);
      }
      else if (m%d!==0) {
          window.alert(`${d} tidak habis membagi ${m}`);
      }
       else if ((p-q)%m==0){
       let g = p + " &Congruent; " + q + " mod ("+ m + ")" + " dan " + d + "|" + m + " maka " + p + " &Congruent; " + q + " mod ("+ d + ")" +"<br />";
          $("#submit5b").append(g);
      } else {
          let g =  p + " &NotCongruent; " + q + " mod (" + m + ")" +"<br>";
          $("#submit5b").append(g);
      }
    }
  });

  $("#erase5a").click(function(){
    $("#submit5a").empty();
  });

  $("#erase5b").click(function(){
    $("#submit5b").empty();
  });
  
  const listenM = document.getElementById("teo5mb");
  listenM.addEventListener("keyup", function gantinilai() {
      let nilaiM = listenM.value;
      let nilaiR = document.getElementById("teo5rb");
      nilaiR.value = nilaiM;
  });
  // Theorm 5 End

  // Theorm 6 Start
  $("#erase6").click(function() {
    $("#submit6").empty();
  });

  $("#erase6a").click(function() {
    $("#submit6a").empty();
  });

  $("#erase6a2").click(function() {
    $("#submit6a2").empty();
  });

  $("#erase6b").click(function() {
    $("#submit6b").empty();
  });

  const nilaiA = document.querySelector("#a");
  nilaiA.addEventListener("keyup", function gantiNilaiA() {
      let nilaiA2 = document.querySelector("#a2");
      nilaiA2.value=nilaiA.value;
  });
  
  const teo6a = document.querySelector("#teo6aa");
  teo6a.addEventListener("keyup", function gantiNilaiA() {
      let teo6a2 = document.querySelector("#teo6aa2");
      teo6a2.value=teo6a.value;
  });
  
  $("#tes6").click(function() {
    console.log('a');
      let a = document.getElementById("a").value;
    let a2 = document.getElementById("a2").value;
    let m = document.getElementById("m").value;
    if (!a || !a2 || !m ) {
      window.alert('ada bagian yang kosong');
    } else if ( m<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
      a = Number(a);
      a2 = Number(a2);
      m = Number(m);
      if (isNaN(a) || isNaN(a2) || isNaN(m) ) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(a) || !Number.isInteger(a2) || !Number.isInteger(m) ) {
        window.alert('silahkan input bilangan bulat');
      }
        else {
            let am = fpb(a, m);
            let b = m/am;
          let g = `${a}.p &Congruent; ${a2}.q mod ${m} karena (${a},${m})=${am} maka p&Congruent;q (mod ${m}/${am}) atau p&Congruent;q (${b})<br>`;
          $("#submit6").append(g);
      }
    }
  });

  $("#tes6a").click(function() {
    let a = document.getElementById("teo6aa").value;
    let p = document.getElementById("teo6pa").value;
    let a2 = document.getElementById("teo6aa2").value;
    let q = document.getElementById("teo6qa"). value;
    let m = document.getElementById("teo6ma").value;
    if (!a || !a2 || !m || !p || !q) {
      window.alert('ada bagian yang kosong');
    } else if ( m<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
      a = Number(a);
      a2 = Number(a2);
      m = Number(m);
      p = Number(p);
      q = Number(q);
      if (isNaN(a) || isNaN(a2) || isNaN(m) || isNaN(p) || isNaN(q) ) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(a) || !Number.isInteger(a2) || !Number.isInteger(p) || !Number.isInteger(q) ) {
        window.alert('silahkan input bilangan bulat');
      }
      else if (((p*a)-(q*a))%m==0){
      let am = fpb(a, m);
      let b = m/am;
          let g = `${a}.${p}&Congruent;${a}.${q} mod ${m} karena (${a},${m}) = ${am} maka ${p}&Congruent;${q} (mod ${m}/${am}) atau ${p}&Congruent;${q} (mod ${b})<br>`;
          $("#submit6a").append(g);
      } else {
          let g = `${a}.${p}&NotCongruent; ${a}.${q} (mod ${m})`;
          $("#submit6a").append(g);
      }
    }
  });

  let arr = [];
  let arr2 = [];
  let arr3 = [];    
  let hsp, hsq, hsm;
  let n=0;
  let fpb2;

  function arrayFpb(p, q) {
    let smaller;
    let fpb2;
    if (p>q) {
      smaller = q
    } else {
      smaller = p
    }
    for(let i = 0; i<smaller+1; i++) {
      if (p%i == 0 && q%i==0) {
        fpb2 = i;
        arr.push(fpb2);
        n++;
      }
    }
    return arr;
        
  }

  const tes6a2 = document.querySelector("#tes6a2");
  tes6a2.addEventListener("click", function cob() {
    let arr4 = [];    
    arr = [];
    arr2 = [];
    arr3 = [];
    arr4 =[];
    arr4.splice(0); 
    let p = document.getElementById("teo6pa2").value;
    let q = document.getElementById("teo6qa2"). value;
    let m = document.getElementById("teo6ma2").value;
    if (!m || !p || !q) {
      window.alert('ada bagian yang kosong');
    } else if ( m<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
      m = Number(m);
      p = Number(p);
      q = Number(q);
      if ( isNaN(m) || isNaN(p) || isNaN(q) ) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(m) ||!Number.isInteger(p) || !Number.isInteger(q) ) {
        window.alert('silahkan input bilangan bulat');
      } else if ((p-q)%m==0){
        arr2 = arrayFpb(p, q);
        for (let i=0;i<arr2.length;i++){
          arr3[i]=fpb(arr2[i],m);
        }
        for(let i = 0;i<arr2.length;i++){
          hsp = p/arr2[i];
          hsq = q/arr2[i];
          hsm = m/arr3[i];
          arr4[i]= `<li>${arr[i]}.${hsp}&Congruent;${arr[i]}.${hsq} (mod ${m}) karena (${arr[i]},${m})=${arr3[i]} maka ${hsp}&Congruent;${hsq} (mod ${m}/${arr3[i]}) atau ${hsp}&Congruent;${hsq} (mod ${hsm})</li>`;
        }
      
        $("#submit6a2").append(arr4);
        arr = [];
        arr2 = [];
        arr3 = [];
        arr4 =[];
        Array.isArray(arr4);
        Array.isArray(arr2);
        Array.isArray(arr);
        Array.isArray(arr3);
        for (let i = 0;i<arr.length;i++) {
            arr.pop();
        }
        for (let i = 0;i<arr2.length;i++) {
            arr2.pop();
        }
        arr4.splice(0,arr4.length);
        for (let i = 0;i<arr3.length;i++) {
            arr3.pop();
        }
        for (let i = 0;i<arr4.length;i++) {
            arr4.pop();
        }
      } else {
          let g =  p + " &NotCongruent; " + q + " mod (" + m + ")" +"<br>";
          $("#submit6a2").append(g);
      }
    }
  });

  $("#tes6b").click(function() {
    let m1 = document.getElementById("teo6mb1").value;
    let m2 = document.getElementById("teo6mb2").value;
    if (!m1 || !m2 ) {
      window.alert('ada bagian yang kosong');
    } else if ( m1<=0 || m2<=0) {
        window.alert('modulo harus bilangan positif dan tidak bisa mod 0');
    } else {
      m1 = Number(m1);
      m2 = Number(m2);
      if (isNaN(m1) || isNaN(m2) ) {
        window.alert('silahkan masukkan suatu bilangan');
      } else if(!Number.isInteger(m1) || !Number.isInteger(m2) ) {
        window.alert('silahkan input bilangan bulat');
      }
      else {
          let am = kpk(m1,m2);
          let g = `p &Congruent; q mod ${m1} dan p &Congruent; q mod ${m2} maka p&Congruent;q (mod [${m1},${m2}]) atau p&Congruent;q (${am})<br>`;
          $("#submit6b").append(g);
      }
    }
  });

  const fpb = (m, n) => {
    m=Math.abs(m);
    n=Math.abs(n);
    if(!n) return n === 0 ? m : NaN
    let r = m%n;
    return fpb(n, r);
  }

  const kpk = (m, n) => {
    let hasilFpb = fpb(m, n);
    return Math.abs(m*n)/hasilFpb;
  }
  // Theorm 6 End

//end  
});