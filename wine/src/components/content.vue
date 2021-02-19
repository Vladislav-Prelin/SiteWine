<template>
    <div class="content">
        <div class="content_header">
            <div class="container">
                <div class="box">
                    <div class="header_text">Лучший вкус это вкус долколетнего вина</div>
                </div>

                <div class="middle">
                    <div class="line">
                        <div class="line_footer"></div>
                    </div>
                </div>

                <div class="block">
                    <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                    Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi,
                                    mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac.
                                    Mauris dictumst risus pulvinar blandit elit. Vestibulum quam ultrices nascetur et viverra suscipit.
                                    Proin vitae aliquet leo aliquam amet rutrum. Lectus auctor purus ultrices enim ultrices. 
                                    Augue fringilla tellus tortor orci ultrices sed. Viverra cras sapien, pellentesque viverra malesuada.
                                    Tellus dolor, eget vitae dignissim molestie eget sit duis. Vitae dui vel pretium euismod diam.
                                    Pellentesque amet, lacus, amet, quis risus. Pellentesque scelerisque nunc, orci aliquam quis.
                    </div>
                </div>

                <div class="block_img">
                    <div class="img"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Content'
}
</script>

<style lang="scss" scoped>
.content {
    display: flex;
    width: 100%;
    height: 856px; 
    background: #282828;
    cursor: default;
}

.content_header {
width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.container {
    display: flex;
    flex-direction: column;
    width: 1100px;
    justify-content: center;
    height: 656px;
    text-align: center;
    border: 2px solid #fff;
}

.box {
    display: block;
    width: 100%;
    height: 3rem;
    overflow: hidden;
}

.header_text {
    display: block;
    font-family: 'Playfair Display';
font-style: normal;
font-weight: bold;
font-size: 36px;
line-height: 150%;
text-align: center;
color: #FFFFFF;
}

.middle {
    display: block;
}

.line {
     display: flex;
    width: 100%;
    height: 1px;
    justify-content: center;
    margin-top: 3rem;
}

.line_footer {
       display: flex;
    width: 160px;
    height: 1px;
    background: #fff;
}




.block {
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    margin-top: 3rem;
}

.text {
      display: flex;
          width: 733px;
    height: 192px;
    text-align: center;
    justify-content: center;
    align-items: center;
    font-family: 'Montserrat';
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 150%;
color: #FFFFFF;
}



.block_img {
       display: flex;
    justify-content: center;
    margin-top: 3rem;
}

.img {
    width: 160px;
    height: 160px;
    background: url('../assets/img/block_content/image.png');
    background-size: cover;
}
</style>