<template>
  <div class="footer_notation">
    <div class="block_header">
      <h1 class="head_text">Запись на дегустацию</h1>
    </div>

    <div class="header_img">
      <div class="img_one"></div>
      <div class="img_two"></div>
    </div>

    <div class="container">
      <div class="content">
        <div class="block">
          <div class="wrap">
            <p class="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
              <br />
              enim tortor in hac id imperdiet adipiscing. Pellentesque nisi, mi
              sit non sit sed fermentum.
            </p>
          </div>
        </div>

        <form action="" class="block_form">
          <input type="text" placeholder="Имя" class="input_form" />
          <input type="text" placeholder="Телефон" class="input_form_two" />
        </form>

        <div class="block_inner">
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Бутик на Невском 103"
            class="textarea"
          ></textarea>
        </div>

        <div class="button">
          <div class="btn">записаться</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notation",
};
</script>

<style lang="scss" scoped>
.footer_notation {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 767px;
  background: #282828;
  flex-direction: column;
  position: relative;
}

.block_header {
  width: 100%;
  display: flex;
  justify-content: center;
}

.header_img {
  display: flex;
}

.img_one {
  display: flex;
  width: 260px;
  height: 260px;
  position: absolute;
  transform: translateY(-66px) translateX(347px);
  background: url("../assets/img/block_footerNotation/image.png");
  background-size: cover;
}

.img_two {
  width: 260px;
  height: 200px;
  position: absolute;
  transform: translateY(-55px) translateX(81rem);
  background: url("../assets/img/block_footerNotation/image (1).png");
  background-size: cover;
}

.head_text {
  display: flex;
  position: absolute;
  justify-content: center;
  transform: translateY(-41px);
  width: 490px;
  height: 74px;
  align-items: center;
  font-family: "Playfair Display";
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 150%;
  background: #282828;
  color: #ffffff;
}

.container {
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.content {
  display: flex;
  width: 1100px;
  height: 538px;
}
.block {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border: 3px solid #c4c4c4;
}

.wrap {
  display: flex;
  justify-content: center;
}

.text {
  width: 539px;
  height: 72px;
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 150%;
  color: #ffffff;
}

.block_form {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
  color: #ffffff;
}

input {
  background: #282828;
  border: none;
  border-bottom: 1px solid #fff;
}

input::placeholder {
  color: #fff;
}
.input_form {
  width: 255px;
  height: 30px;
  margin-right: 30px;
}

.input_form_two {
  width: 255px;
  height: 30px;
}

.block_inner {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

textarea {
  background: #282828;
  border: none;
  border-bottom: 1px solid #fff;
}

textarea::placeholder {
  color: #fff;
}
.textarea {
  min-width: 540px;
  max-height: 30px;
  min-height: 30px;
  max-width: 540px;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 150%;
  color: #fff;
}

.button {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

.btn {
  display: flex;
  width: 541px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background: #282828;
  border: 1px solid #fff;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  color: #ffffff;
}
</style>
