<template>
  <div class="footer">
    <div class="footer_container">
      <div class="footer_wrapper">
        <div class="footer_block">
          <ul class="footer_inner">
            <li class="footer_text"><a href="">Главная</a></li>
          </ul>
          <ul class="footer_inner">
            <li class="footer_text"><a href="">Каталог</a></li>
          </ul>
          <ul class="footer_inner">
            <li class="footer_text"><a href="">Поставщики</a></li>
          </ul>
          <ul class="footer_inner">
            <li class="footer_text"><a href="">Коллекция</a></li>
          </ul>
          <ul class="footer_inner">
            <li class="footer_text"><a href="">Дегустация</a></li>
          </ul>
          <ul class="footer_inner">
            <li class="footer_text"><a href="">Коллекция 2020</a></li>
          </ul>
          <ul class="footer_inner">
            <li class="footer_text"><a href="">Контакты</a></li>
          </ul>
        </div>
        <div class="footer_block_two">
          <ul class="footer_list">
            <li class="footer_item_left">винный бутик LE CORTE</li>
          </ul>
          <ul class="footer_list">
            <li class="footer_item_figure">8 (812) 123-45-67</li>
          </ul>
          <div class="footer_list">
            <div class="footer_item">
              <div class="footer_youtube_icon"></div>
              <div class="footer_vk_icon"></div>
              <div class="footer_f_icon"></div>
            </div>
          </div>
          <ul class="footer_list">
            <li class="footer_item_right">© le-corte.ru</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footer",
};
</script>
<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 220px;
  background: #998431;
  &_container {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  &_wrapper {
    display: flex;
    width: 1110px;
    height: 220px;
    flex-direction: column;
    justify-content: center;
  }
  &_block {
    width: 100%;
    height: 3rem;
    align-items: center;
    display: flex;
    border: 1px solid #ffffff;
    border-right: none;
    border-left: none;
  }
  &_text {
    font-family: "Montserrat";
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    color: #ffffff;
    a {
      color: #ffffff;
    }
  }
  &_block_two {
    display: flex;
    width: 100%;
    height: 3rem;
    justify-content: center;
  }
  &_list {
    display: flex;
    align-items: center;
    cursor: default;
  }
  &_item,
  &_item_right,
  &_item_left,
  &_item_figure {
    display: flex;
    width: 279px;
    height: 3rem;
    justify-content: center;
    align-items: center;
    border: 1px solid #fff;
    border-top: none;
    font-family: "Montserrat";
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    text-align: center;
    text-transform: uppercase;
    color: #ffffff;
  }
  &_item_left {
    border-left: none;
    border-right: none;
  }
  &_item_right {
    border-right: none;
    border-left: none;
  }
  &_item_figure {
    border-right: none;
  }
  &_youtube_icon {
    width: 23px;
    height: 16px;
    margin-left: 1rem;
    background: url("../assets/img/block_footer/Vector.png");
    background-size: cover;
  }
  &_vk_icon {
    width: 26px;
    height: 15px;
    margin-left: 3rem;
    background: url("../assets/img/block_footer/Vector (2).png");
    background-size: cover;
  }
  &_f_icon {
    width: 9px;
    height: 17px;
    margin-left: 3rem;
    background: url("../assets/img/block_footer/Vector (1).png");
    background-size: cover;
  }
}
</style>
