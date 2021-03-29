<template>
  <div class="cnt">
    <div class="container">
      <div class="content">
        <div class="block">
          <div class="block_wrapper_one">
            <h1 class="first_text">Новинки коллекций</h1>
            <p class="text">
              Март 1980 <br />
              Урожай Марселя
            </p>
          </div>

          <div class="line"></div>
          <p class="text_item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Feugiat enim tortor in hac id imperdiet adipiscing. <br />
            Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing
            <br />
            morbi sodales ac.
          </p>
        </div>

        <div class="box">
          <div class="wrapper">
            <span class="list">1980</span>
            <div class="wrap">
              <p class="inner_one">Colli Euganei Bianco Ca' Lustra 1980</p>
              <p class="inner_two">Красочная бутылка вина из Марселя</p>
            </div>
          </div>

          <div class="wrapper">
            <span class="list">1980</span>
            <div class="wrap">
              <p class="inner_one">Colli Euganei Bianco Ca' Lustra 1980</p>
              <p class="inner_two">Красочная бутылка вина из Марселя</p>
            </div>
          </div>

          <div class="wrapper">
            <span class="list_bottom">1980</span>
            <div class="wrap_bottom">
              <p class="inner_one">Colli Euganei Bianco Ca' Lustra 1980</p>
              <p class="inner_two">Красочная бутылка вина из Марселя</p>
            </div>
          </div>
        </div>

        <div class="box_two">
          <p class="text_item">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
            Feugiat enim tortor in hac id imperdiet adipiscing. <br />
            Pellentesque nisi, mi sit non sit sed fermentum. Felis adipiscing
            <br />
            morbi sodales ac.
          </p>
        </div>
      </div>

      <div class="footer_button">
        <p class="btn">узнать подробнее</p>
      </div>
    </div>

    <div class="block_wrapper_two">
      <div class="img_top"></div>

      <div class="block_inner">
        <div class="img_bottom_one"></div>
        <div class="img_bottom_two"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cnt",
};
</script>

<style lang="scss" scoped>
.cnt {
  width: 100%;
  height: 1038px;
  background: #e6e3c4;
  cursor: default;
}

.container {
  display: flex;
  width: 100%;
  justify-content: center;
}

.content {
  display: flex;
  width: 1100px;
  align-items: center;
  margin-top: 5rem;
}

.block {
  display: flex;
  width: 100%;
  border-top: 1px solid #998431;
  border-bottom: 1px solid #998431;
}

.block_wrapper_one {
  display: flex;
  width: 50%;
  flex-direction: column;
}

.block_wrapper_two {
  width: 50%;
  display: flex;
  margin-top: 3rem;
  flex-direction: column;
  align-items: flex-end;
}

.img_top {
  width: 540px;
  height: 500px;
  background: url("../assets/img/block_cnt/Rectangle 11.png");
  background-size: cover;
}

.block_inner {
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
}

.img_bottom_one {
  width: 255px;
  height: 228px;
  margin-right: 30px;
  background: url("../assets/img/block_cnt/Rectangle 12.png");
  background-size: cover;
}
.img_bottom_two {
  width: 255px;
  height: 228px;
  background: url("../assets/img/block_cnt/Rectangle 13.png");
  background-size: cover;
}

.first_text {
  display: flex;
  margin-top: 3rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #000000;
}

.text {
  display: flex;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 150%;
  color: #282828;
}

.text_item {
  margin-top: 2rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #282828;
}

.line {
  display: flex;
  width: 10rem;
  height: 2px;
  margin-top: 2rem;
  background: #282828;
}

.box {
  display: flex;
  width: 27rem;
  flex-direction: column;
  margin-top: 2rem;
}

.box_two {
  display: flex;
  width: 28rem;
  flex-direction: column;
  margin-top: 1rem;
}

.footer_button {
  margin-bottom: 3rem;
  display: flex;
  margin-top: 2rem;
}

.btn {
  display: flex;
  width: 254px;
  height: 50px;
  justify-content: center;
  align-items: center;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #fff;
  background: #998431;
  cursor: pointer;
}
.wrapper {
  display: flex;
}
.list {
  display: flex;
  width: 6rem;
  height: 5rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #282828;
  border-right: 1px solid #000;
  border-bottom: 1px solid #000;
}

.list_bottom {
  display: flex;
  width: 6rem;
  height: 5rem;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #282828;
  border-right: 1px solid #000;
}
.wrap {
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #000;
  justify-content: center;
}

.wrap_bottom {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.inner_one {
  display: flex;
  padding-left: 1rem;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 150%;
  color: #282828;
  align-items: center;
}
.inner_two {
  display: flex;
  padding-left: 1rem;
  align-items: center;
  margin-top: 7px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 150%;
  color: #282828;
}
</style>
