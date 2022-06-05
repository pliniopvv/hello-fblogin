import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacebookService {

  constructor() { }

/**
{
    status: 'connected',
    authResponse: {
        accessToken: '...',
        expiresIn:'...',
        signedRequest:'...',
        userID:'...'
    }
  }

status especifica o status de login da pessoa que está usando o aplicativo. O status pode ser um dos seguintes:
connected - a pessoa está conectada ao Facebook e conectou-se ao seu aplicativo.
not_authorized - a pessoa está conectada ao Facebook, mas não se conectou ao seu aplicativo..
unknown - a pessoa não está conectada ao Facebook, então não é possível saber se ela se conectou ao seu aplicativo ou se FB.logout() foi chamado antes e, portanto, não pode se conectar ao Facebook.

authResponse será incluído se o status for connected e for formado pelo seguinte:
accessToken - contém um token de acesso para a pessoa que está usando o aplicativo.
expiresIn - Indica o tempo de UNIX quando o token expira e precisa ser renovado.
signedRequest - um parâmetro assinado, contendo informações sobre a pessoa que está utilizando o aplicativo.
userID - é o ID da pessoa que está usando o aplicativo.
*/

  statusLogin() {
    let retorno = new BehaviorSubject(null);
    // @ts-ignore
    FB.getLoginStatus(function(response) {
      retorno.next(response);
    });
    return retorno;
  }



  logar() {
    // @ts-ignore
    let ret = FB.login();
    console.log(ret);
  }
}
