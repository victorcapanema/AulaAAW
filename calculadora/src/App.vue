<template>
    <div id="app">
        <h1>Calculadora</h1>
        <Calculator />
    </div>
</template>

<script>
import Calculator from "./main/Calculator"

export default {
    components:{Calculator}
}
</script>

<style>
#app {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    align-items: center;
    text-align: center;

    color: #fff;
    background: linear-gradient(to right, rgb(83, 105 ,118), rgb(41, 46, 73));

}

* {
    font-family: "RobotoMono", monospace;
}

body{
    margin: 0;
}

@font-face{
    font-family: "RobotoMono";
    src: url("R:\WorkSpaces\CursoJS\vue\calculadora\src\fonts\RobotoMono-Thin.ttf");
}
</style>
