import { checaBissexto } from "./ex1";

describe("Checa bissexto", () => {
  test("retorna true pra 1600", () => {
    const resultado = checaBissexto(1600);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 2000", () => {
    const resultado = checaBissexto(2000);

    expect(resultado).toEqual(true);
  });

  test("retorna true pra 1996", () => {
    const res = checaBissexto(1996);
    expect(res).toEqual(true);
  });

  test("retorna true pra 2008", () => {
    const res = checaBissexto(2008);
    expect(res).toEqual(true);
  });

  test("retorna false pra 2007", () => {
    const res = checaBissexto(2007);
    expect(res).toEqual(false);
  });
});
