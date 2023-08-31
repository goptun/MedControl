import { EstruturaStyled } from "./styled";
import { Box } from "@mui/material";

function EstruturaAjuda() {
  return (
    <EstruturaStyled>
      <h4>Precisa de ajuda?</h4>
      <p>Confira abaixo as principais dúvidas de uso:</p>
      <br />

      <h4>Sobre o Login</h4>
      <Box className="box-control" component="fieldset">
        <ul>
          <li>
            Quando for preencher o e-mail, lembre-se de usar um endereço válido
            com o símbolo '@' e a extensão '.com' ou '.com.br'.
          </li>
          <br />
          <li>
            Quando for preencher a senha, lembre-se de usar pelo menos 8
            caracteres, com pelo menos 1 letra e 1 número.
          </li>
        </ul>
      </Box>

      <h4>Sobre o Cadastro de Farmácias</h4>
      <Box className="box-control" component="fieldset">
        <ul>
          <li>
            Para garantir o cadastro perfeito da nova farmácia, basta preencher
            todos os campos do formulário em "Cadastro de Farmácias".
          </li>
          <br />
          <li>
            A única exceção é para "Telefone" e "Complemento", que não são
            obrigatórios.
          </li>
          <br />
          <li>
            Lembre-se de inserir somente números no campo "CEP", sem caracteres
            especiais.
          </li>
          <br />
          <li>
            Em algumas situações, os detalhes referentes ao CEP, como logradouro
            e bairro, não serão preenchidos automaticamente. Isso ocorre porque
            certos CEPs são abrangentes, englobando várias ruas e bairros em uma
            mesma região. Nesses casos, você pode preencher manualmente esses
            campos.
          </li>
        </ul>
      </Box>

      <h4>Sobre o Cadastro de Medicamentos</h4>
      <Box className="box-control" component="fieldset">
        <ul>
          <li>
            Quando estiver cadastrando um novo medicamento, lembre-se de
            preencher todos os campos para garantir a precisão das informações,
            exceto a descrição, que é opcional.
          </li>
          <br />
          <li>
            A única exceção é para "Descrição", que não é obrigatória. Caso não
            tenha uma descrição, você pode deixar esse campo em branco.
          </li>
          <br />
          <li>
            Preste atenção especial ao campo "Tipo de Medicamento", pois ele já
            possui opções pré-preenchidas que fornecem informações essenciais
            sobre o medicamento que está sendo registrado.
          </li>
          <br />
        </ul>
      </Box>

      <h4>Sobre o Mapa</h4>
      <Box className="box-control" component="fieldset">
        <ul>
          <li>
            No processo de criar e visualizar o mapa no MedControl, fizemos
            várias integrações com APIs de terceiros. Isso significa que, de vez
            em quando, esses serviços podem estar temporariamente indisponíveis.
          </li>
          <br />
          <li>
            Se você preencheu todos os dados corretamente ao cadastrar uma nova
            farmácia e ainda assim as informações não aparecem automaticamente
            no mapa, pode ser que essa seja a razão.
          </li>
          <br />
          <li>
            Por fim, uma das APIs usa informações de latitude e longitude
            através do Geocoding Google. Para que esses dados sejam gerados, é
            necessário ter inserido uma chave no arquivo JSX chamado
            "CadastraFarmacia".
          </li>
          <br />
        </ul>
      </Box>
    </EstruturaStyled>
  );
}

export { EstruturaAjuda };
