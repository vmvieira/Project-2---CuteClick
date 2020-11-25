import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { Container, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat, faDog } from "@fortawesome/free-solid-svg-icons";

import MenuBar from "./MenuBar";
import WinnerComponent from "./WinnerComponent";

const AnimalQuiz = () => {
  const [pics, setPics] = useState([]);

  const [toggleForm, setToggleForm] = useState(false);

  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * 30)
  );

  const [quizState, setQuizState] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
    question6: "",
    question7: "",
    winner: "",
  });

  function handleSubmit() {
    setToggleForm(true);

    let catCount = 0;
    let dogCount = 0;
    let values = Object.values(quizState);
    values.forEach((value) => {
      if (value === "cat") {
        catCount += 1;
      } else if (value === "dog") {
        dogCount += 1;
      }
    });
    if (catCount > dogCount) {
      setQuizState({ ...quizState, winner: "cat" });
      if (pics.length === 0 || pics.length === 30) {
        try {
          const unsplash = new Unsplash({
            accessKey: "SkcKMOTBL9jchiPGye03WEAsrnd0SdU7K9OBk9w6zjs",
          });
          unsplash.photos
            .getRandomPhoto({ query: "cat", count: 30 })
            .then(toJson)
            .then((json) => {
              setPics([...json]);
            });
        } catch (err) {
          console.error(err);
        }
      } else {
        setRandomIndex(Math.floor(Math.random() * 30));
      }
    } else if (dogCount > catCount) {
      setQuizState({ ...quizState, winner: "dog" });
      if (pics.length === 0 || pics.length === 30) {
        try {
          const unsplash = new Unsplash({
            accessKey: "SkcKMOTBL9jchiPGye03WEAsrnd0SdU7K9OBk9w6zjs",
          });
          unsplash.photos
            .getRandomPhoto({ query: "dog", count: 30 })
            .then(toJson)
            .then((json) => {
              setPics([...json]);
            });
        } catch (err) {
          console.error(err);
        }
      } else {
        setRandomIndex(Math.floor(Math.random() * 30));
      }
    }
  }

  function renderImage() {
    if (pics.length > 0) {
      return (
        <img
          className="img-fluid exampleCover rounded mx-auto d-block"
          src={pics[randomIndex].urls.regular}
          alt="an animal"
        />
      );
    }
  }

  function handleChange(event) {
    setQuizState({
      ...quizState,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  console.log(quizState);
  console.log(pics);

  return (
    <div>
      <MenuBar />
      <Container>
        {toggleForm ? (
          <div>
            {" "}
            <WinnerComponent
              winner={quizState.winner}
              renderImage={renderImage}
              toggleForm={toggleForm}
              setToggleForm={setToggleForm}
              quizState={quizState}
              setQuizState={setQuizState}
            />
          </div>
        ) : (
          <div>
            <h2 className="text-primary my-4 text-center">
              <FontAwesomeIcon icon={faDog} size="1x" color="dodgerblue" />
              <span className="mx-1"></span> Por favor preencha o formulário
              abaixo!<span className="mx-1"></span>{" "}
              <FontAwesomeIcon
                icon={faCat}
                size="1x"
                color="dodgerblue"
                flip="horizontal"
              />
            </h2>
            <form>
              <h3 className="text-primary my-4">
                {" "}
                1 - Acordar as 6:30 da manha:
              </h3>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question1"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Abro as janelas e vejo um lindo dia de sol nascendo!
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question1"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Não acordo, só o meu corpo se levanta.
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question1"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  É uma morte dolorosa, clico no despertador, mais 10 minutos,
                  mais 10 minutos...
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question1"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Preciso de um café e pão na chapa, só eles me fazem levantar.
                </label>
              </div>
              <h3 className="text-primary my-4">
                {" "}
                2 - De manha ao sair de casa:
              </h3>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question2"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Coloco meus fones com noise cancelling para não ter que ouvir
                  ninguém falando nem me desejando bom dia.
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question2"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Meu amorrrrr!! Já acordei !! Fiz café, corri, pedalei, fiz
                  yoga, pilates, natação, levei as crianças na escola, passei no
                  supermercado, nos correios e agora vou trabalhar.
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question2"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Certifico que tudo está bem, se fechei a porta direito, se
                  todas as coisas estão em seu lugar, olho meu schedule etc e
                  saio de casa devidamente no horário 8:12 para passar 8:26
                  pegar um café e evitar filas no elevador, chegando assim, 15
                  minutos antes de todos.
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question2"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Vixi que casa é essa?? A festa na noite passada foi intensa,
                  melhor usar o google maps para saber aonde estou.{" "}
                </label>
              </div>
              <h3 className="text-primary my-4">
                {" "}
                3 - Um gato está te encarando:
              </h3>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question3"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Opa! Vem fazer miau la em casa, já tenho 3 não bobeia não.{" "}
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question3"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Sempre que eu dou zero moral, eles ficam olhando, pode crer
                  que vai vir aqui se passar do meu lado.
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question3"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Sou sua Felícia, vou te amar e amar, vem aqui gatinho fofinho.
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question3"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Deve estar olhando minha aura, eles veem coisas que não vemos
                  e ouvem coisas que não ouvimos. Acho que vou me benzer.{" "}
                </label>
              </div>
              <h3 className="text-primary my-4">
                {" "}
                4 - Um cachorro está te encarando:
              </h3>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question4"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Vai me morder, tenho medo.{" "}
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question4"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Se vier para o meu lado vai levar mordida minha.{" "}
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question4"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Sera que me conhece de algum lugar?{" "}
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question4"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  To sentindo cheiro de cachorro...{" "}
                </label>
              </div>
              <h3 className="text-primary my-4"> 5 - Eu:</h3>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question5"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Cabelo bonito e gosto de cuidar do corpo e da saúde, mamãe me
                  fez assim naturalmente lindo .{" "}
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question5"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Não faço nada, tomo banho e olhe lá.{" "}
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question5"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Shampoo 2 em 1 para economizar meu tempo. Tenho alguns
                  cosméticos, mas já devem ter perdido a validade já que quase
                  nunca uso.{" "}
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question5"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Acordo 2 horas antes para arrumar o cabelo, tomar banho,
                  passar perfume e maquiagem. Tiro uma selfie no espelho de
                  elevador e posto no Insta.{" "}
                </label>
              </div>
              <h3 className="text-primary my-4">
                {" "}
                6 - Você vai a um happy hour depois do trabalho:
              </h3>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question6"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Estou cansada e não conheço esse povo mas depois da 2 cervejas
                  são meus melhores amigos...{" "}
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question6"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  São obrigações sociais que odeio, prefiro até fazer um
                  relatório de despesas(com aqueles recibos que sempre perco),
                  mas vou e fico 20 minutos só para dar um “oi” e fazer social.{" "}
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question6"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Eu sou a personificação do vereador da cidade, todos me
                  adoram. Conheço todo mundo e amo o happy hour com os migos do
                  trabalho.{" "}
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question6"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Se for ter álcool estou indo, mesmo porque depois de uma
                  semana dessas vou ter que virar 1 garrafa de vinho sozinha.{" "}
                </label>
              </div>
              <h3 className="text-primary my-4">
                {" "}
                7 - Você tirou aquela mina chata no amigo secreto da empresa,
                ela vai ganhar:
              </h3>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question7"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Uma lata de atum ou um osso bem fedido.{" "}
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question7"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Uma pá para limpar o coco para combinar com a cara dela.{" "}
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="dog"
                  name="question7"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Uma lambida no meio da cara.{" "}
                </label>
              </div>
              <div className="form-check my-2">
                <input
                  className="form-check-input"
                  type="radio"
                  value="cat"
                  name="question7"
                  onChange={handleChange}
                />
                <label className="form-check-label">
                  Uma arranhada no meio da cara ou um chrrrrrrrrrrrrrrr.{" "}
                </label>
              </div>
              <Button
                onClick={handleSubmit}
                className="my-4"
                variant="outline-primary"
                size="lg"
                block
              >
                <strong>Which animal am I ?</strong>
              </Button>
            </form>
          </div>
        )}
      </Container>
    </div>
  );
};

export default AnimalQuiz;
