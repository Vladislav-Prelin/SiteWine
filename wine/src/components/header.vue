<template>
  <div class="header">
      <div class="header_wrapper">
        <div class="header_left">
          <div class="header_left_text">Новокузнечный переулок 4/1</div>
        </div>
        <div class="header_right">
          <div class="header_text_right">8 (812) 123-45-67</div>
        </div>
      </div>

      <div class="container">
        <div class="content">
          <div class="box">
            <ul class="item">
              <li class="list">Каталог</li>
              <li class="list">Доставка</li>
              <li class="list">Коллекция</li>
              <li class="list">Контакты </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="footer_button">
        <div class="footer_wrapper">
          <div class="footer_btn">винная карта</div>
          <div class="footer_btn_two">дегустация</div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Header',

}
</script>


<style scoped lang="scss" scoped>


.header { 
  width: 100%;
  height: 900px;
  background: url('../assets/img/block_header/bgc.png');
  background-size: cover;
  cursor: default;
}

.header_wrapper {
  display: flex;
  width: 100%;
  margin-top: 1rem;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
  color: #FFFFFF;
}

.header_left  {
  display: flex;
  width: 50%;
  justify-content: center;
  text-align: center; 
  padding-left: 2rem;
}

.header_right {
  width: 50%;
  display: flex;
  padding-left: 2rem; 
}


.header_text_right {
  display: flex;
  justify-content: center;
  text-align: center;
}



//контент блока

.container {
  display:flex;
  width: 100%;
  height: 10rem;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.box {
  display: flex;
  text-align: center;
  justify-content: center;
  width: 1100px;
  height: 10rem;
}

.item {
  display: flex;
  width: 100%;
  height: 5rem;
  justify-content: center;
  align-items: center;
}

.list {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 18rem;
  height: 3rem;
  border: 1px solid #FFFFFF;
  border-right: none;
  margin-left: -1px;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #FFFFFF;
  cursor: default;
}

.list:hover {
  background:#BED3E4;
  color:rgb(49, 21, 21);
  transition: 1s linear;
}

.item:hover .list {
  transform: scale(1);
}




.footer_button {
  display: flex;
  width: 100%;
}


.footer_wrapper {
    display: flex;
    width: 100%;
    height: 34.8rem;
    align-items: flex-end;
    justify-content: center;
}

.footer_btn {
  display: flex;
  width: 203px;
  height: 50px;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #99862A;
  cursor: default;
}

.footer_btn_two {
  display: flex;
  width: 183px;
  height: 50px;
  align-items: center;
  text-align: center;
  justify-content: center;
  background: #99862A;
  margin-left: 2rem;
   cursor: default;
}


.footer_btn_two, 
.footer_btn {
  font-family: 'Montserrat';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 20px;
letter-spacing: 0.05em;
text-transform: uppercase;
color: #FFFFFF;
}
</style>
