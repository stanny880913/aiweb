<template>
  <!-- 上傳完成後顯示 -->
  <div id="title">
    <h1>義大胸腔科</h1>
  </div>
  <!-- 圖片上傳btn -->
  <div id="demo" v-show="uploadnum">
    <input type="file" id="demo_file" accept="image/*" multiple @change="update($event)" />
    DRAG & DROP <br />
    IMAGE
  </div>
  <div id="look">
    <div id="look_img" v-for="(item, index) in imgSrc" :key="index">
      <img :src="item" alt="" />
      <div id="look_event">
        <img src="https://s1.ax1x.com/2022/08/08/vMEtPO.png" alt="" title="check_img" @click="look(index)" />
        <img src="https://s1.ax1x.com/2022/08/08/vMEaxH.png" alt="" title="delete_img" @click="deletes(index)" />
      </div>
    </div>
  </div>

  <!-- 圖片預覽 -->
  <div id="preview" v-if="show" @click="
    () => {
      show = false;
    }
  ">
    <div id="preview_close">
      <img src="https://s1.ax1x.com/2022/08/08/vMEURe.png" alt="" title="关闭" @click="
        () => {
          show = false;
        }
      " />
    </div>
    <div id="preview_last" v-if="pvwWhere != 0" @click.stop="previewLast()">
      <img src="https://s1.ax1x.com/2022/08/08/vMEBqI.png" alt="" title="上一張" />
    </div>
    <div id="preview_next" v-if="pvwWhere != imgSrc.length - 1" @click.stop="previewNext()">
      <img src="https://s1.ax1x.com/2022/08/08/vMErZt.png" alt="" title="下一張" />
    </div>
    <img :src="pvwSrc" alt="" />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const imgSrc = ref([]); //已上傳圖片數组
    const arrLength = ref(10000); //上传img數量
    const uploadnum = ref(true); //控制上传按钮的显示隱藏
    const show = ref(false); //控制預覽img遮罩層顯示隱藏
    const pvwSrc = ref(null); //預覽img地址
    const pvwWhere = ref(0); //选择哪一張进行預覽以及控制上一張下一張

    const update = (e) => {
      let file = e.target.files;
      console.log("file", file);
      if (file) {
        let filesLength = arrLength.value - imgSrc.value.length;
        for (let i = 0; i < filesLength; i++) {
          let img = new FileReader();

          img.onloadend = ({ target }) => {
            imgSrc.value.push(target.result); //将img轉化为二進位數據
            console.log("target", target.result);
            console.log("upload success!!");
            panduan();
          };
          img.readAsDataURL(file[i]);
        }
      }
    };
    //判斷照片數量是否滿足規定數量；滿足則隱藏上傳按钮
    const panduan = () => {
      if (imgSrc.value.length >= arrLength.value) {
        uploadnum.value = false;
      } else {
        uploadnum.value = true;
      }
    };
    panduan();
    // delete img
    const deletes = (i) => {
      imgSrc.value.splice(i, 1);
      panduan();
    };
    //img預覽
    const look = (i) => {
      console.log(imgSrc.value);
      pvwWhere.value = i;
      show.value = true;
      pvwSrc.value = imgSrc.value[pvwWhere.value];
      console.log("image:", pvwSrc);
    };
    //預覽：上一張功能
    const previewLast = () => {
      pvwWhere.value--;
      pvwSrc.value = imgSrc.value[pvwWhere.value];
    };
    //預覽：下一張功能
    const previewNext = () => {
      pvwWhere.value++;
      pvwSrc.value = imgSrc.value[pvwWhere.value];
    };
    return {
      update,
      imgSrc,
      arrLength,
      uploadnum,
      deletes,
      look,
      show,
      pvwSrc,
      pvwWhere,
      previewLast,
      previewNext,
    };
  },
};
</script>

<style>
#demo {
  width: 20vh;
  height: 20vh;
  position: relative;
  border: 3px dashed #dcdcdc;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1em;
  margin-top: 1em;
}

#demo_file {
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

#demo_img {
  display: block;
  width: 50%;
  height: 50%;
}

#look {
  width: 70vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: left;
  align-items: center;
}

#look_img {
  width: 20vh;
  height: 20vh;
  margin-left: 1em;
  margin-top: 1em;
  display: flex;
  justify-content: space-around;
}

#look_img img {
  display: block;
  width: 20vh;
  height: 20vh;
  cursor: pointer;
}

#look_event {
  background: rgba(0, 0, 0, 0.6);
  width: 20vh;
  height: 0px;
  position: absolute;
  transition: 1s;
  display: flex;
  justify-content: center;
  align-items: center;
}

#look_event img {
  display: block;
  width: 2em;
  height: 0em;
  cursor: pointer;
}

#look_img:hover #look_event {
  height: 20vh;
  /* opacity: 50%; */
}

#look_img:hover #look_event>img {
  height: 2em;
}

#preview {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

#preview img {
  width: 40%;
}

#preview_close {
  position: absolute;
  top: 4vh;
  right: 0;
  display: flex;
  justify-content: center;
}

#preview_last {
  position: absolute;
  left: 0;
  top: 50%;
  display: flex;
  justify-content: center;
}

#preview_next {
  position: absolute;
  right: 0;
  top: 50%;
  display: flex;
  justify-content: center;
}
</style>
