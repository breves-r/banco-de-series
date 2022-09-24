<template>
  <main>
    <PageTitle />
    <button class="btn" @click="add()">Adicionar Série</button>

    <div class="series" v-if="series.length != 0">
      <div class="card" v-for="(serie, index) in series" :key="index">
        <div class="card-body">
          <img :src="serie.image" class="poster"/>
          <span class="text">
            <p ><b>{{ serie.name }}</b></p>
            <p>{{ serie.date }}</p>
            <p>{{ serie.genre }}</p>
            <p>{{ serie.review }}</p>
          </span>
        </div>
      </div>
    </div>

    <div class="text-message">
      <p v-if="series.length == 0">Não há séries adicionadas</p>
    </div>
  </main>
</template>
  
  <script>
import PageTitle from "../components/PageTitle.vue";

export default {
  name: "App",
  components: {
    PageTitle,
  },
  data() {
    return {
      series: [
        {name: "She-Hulk", date: "2022-09-23", genre: "Comédia", review: "Série muito boa", image: "https://bancodeseries.com.br/images/posters/17385.jpg"},
        {name: "She-Hulk", date: "2022-09-23", genre: "Comédia", review: "Série muito boa", image: "https://bancodeseries.com.br/images/posters/17385.jpg"},
        {name: "She-Hulk", date: "2022-09-23", genre: "Comédia", review: "Série muito boa", image: "https://bancodeseries.com.br/images/posters/17385.jpg"},
        {name: "She-Hulk", date: "2022-09-23", genre: "Comédia", review: "Série muito boa", image: "https://bancodeseries.com.br/images/posters/17385.jpg"},
        {name: "She-Hulk", date: "2022-09-23", genre: "Comédia", review: "Série muito boa", image: "https://bancodeseries.com.br/images/posters/17385.jpg"},
        {name: "She-Hulk", date: "2022-09-23", genre: "Comédia", review: "Série muito boa", image: "https://bancodeseries.com.br/images/posters/17385.jpg"},
        {name: "She-Hulk", date: "2022-09-23", genre: "Comédia", review: "Série muito boa", image: "https://bancodeseries.com.br/images/posters/17385.jpg"},
        {name: "She-Hulk", date: "2022-09-23", genre: "Comédia", review: "Série muito boa", image: "https://bancodeseries.com.br/images/posters/17385.jpg"}
      
      ]
    };
  },
  methods: {
    add() {
      this.$router.push("/create");
    }
  }
};
</script>
  
  <style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  text-align: center;
  padding: 20px;
  height: 100%;
}

h1 {
  color: cyan;
}

.btn {
  width: 200px;
  background-color: cyan;
}

.btn:hover {
  border: 1px solid cyan !important;
  color: cyan !important;
}

.series {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.card {
  width: 340px;
  margin: 10px;
}

.card-body {
  margin: 0;
  padding: 0;
}

.text {
  color: black;
  margin: 5px 5px;
}

.card-img-top,
.poster {
  width: 320px;
  margin: 10px;
}

.text-message {
  font-size: 24px;
  font-weight: bold;
  color: #D8334A;
  margin-top: 6rem;
}
</style>
  