<template>
<main>
    <PageTitle/>
	<h4>Adicione uma nova série!</h4>

	<form class="form" @submit.prevent="addSerie()">
    <div class="form-group">
      <label for="name">Nome da Série:</label>
      <input type="text" class="form-control" id="name" placeholder="Digite o nome da série" v-model="serie.name" required>
    </div>

    <div class="form-group">
      <label for="date">Data que Assistiu:</label>
      <input type="date" class="form-control" id="date" v-model="serie.date" required>
    </div>

    <div class="form-group">
      <label for="genre">Gênero:</label>
      <select class="form-control" id="genre" v-model="serie.genre">
        <option v-for="(genre, index) in genres" :key="index" v-bind:value="genre">{{genre}}</option>
      </select>
    </div>

    <div class="form-group">
      <label for="review">Review:</label>
      <textarea class="form-control" id="review" rows="3" placeholder="Escreva o que achou da série" v-model="serie.review" required></textarea>
    </div>

    <div class="form-group">
      <label for="image">Link da Imagem de Capa:</label>
      <input type="text" class="form-control" id="image" placeholder="Dimensões: 680x1000" v-model="serie.image" required>
    </div>

    <div class="btn-container">
        <button class="btn back" @click="$router.push('/')">Voltar</button> 
        <button type="submit" class="btn add">Adicionar</button>
    </div>
    
  </form>
</main>
</template>

<script>
import PageTitle from '../components/PageTitle.vue'

export default {
    components: {
        PageTitle
    },
    data() {
      return {
        serie: {
          name: "",
          date: "",
          genre: "",
          review: "",
          image: ""
        },
        genres: ["Ação", "Animação", "Aventura", "Comédia", "Documentário", "Drama", "Reality", "Sci-fi", "Terror"]
      }
    },
    methods: {
      addSerie() {
        alert("Série adicionada!")
      }
    }
}
</script>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
	text-align: center;
	padding: 20px;
	height: 100vh;
}

.btn-container{
    display: flex;
    flex-direction: row;
    gap:20px;
}

.btn {
    cursor: pointer;
  width: 100%;
  flex-wrap: wrap;
  gap: 20px;
}

.back{
    border: 1px solid cyan;
    color: cyan;
}
.back:hover{
    background-color: rgba(0, 255, 255, 0.511);
    border: 1px solid white;
    color: white;
    transition: opacity 0.5s ease;
}

.add{
    background: cyan;
}

.add:hover {
  background-color: rgb(137, 248, 248);
  border: 1px solid black;
  color: black;
  transition: opacity 0.5s ease;
}

.form {
    
  width: 50%;
}

.form-group{
  margin-bottom: 20px;
}
</style>
