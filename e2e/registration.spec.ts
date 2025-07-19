import { test, expect } from "@playwright/test";

import { userRegistrationPage } from "../support/pages/RegistrationPage";
import { User, Users } from "../support/fixtures/User";
import { clearUsersCollection } from "../support/utils/mongoUtils";
import { getDashPage } from "../support/pages/DashPage";
import { getToast } from "../support/pages/components/Toast";

test("Deve realizar o cadastro com sucesso", async ({ page }) => {
  await clearUsersCollection();

  const registrationPage = userRegistrationPage(page);
  const dashPage = getDashPage(page);
  const toast = getToast(page);

  const user: User = Users.validUser;

  await registrationPage.open();
  await registrationPage.registration(user);

  await expect(dashPage.welcome()).toContainText(`Olá, ${user.name}!`);
  await expect(toast.element()).toContainText(
    "Conta criada com sucesso!Bem-vindo ao Linkaí. Agora você pode criar seu perfil."
  );
});

test("Deve exibir erro ao tentar cadastrar com campos obrigatórios em branco", async ({
  page,
}) => {
  const registrationPage = userRegistrationPage(page);
  const toast = getToast(page);

  const user: User = Users.emptyFields;

  await registrationPage.open();
  await registrationPage.registration(user);

  await expect(toast.element()).toContainText(
    "Campos obrigatóriosPor favor, preencha todos os campos."
  );
});

test("Deve exibir erro quando a confirmação de senha for diferente da senha", async ({
  page,
}) => {
  const registrationPage = userRegistrationPage(page);
  const toast = getToast(page);

  const user: User = Users.wrongPassword;

  await registrationPage.open();
  await registrationPage.registration(user);

  await expect(toast.element()).toContainText(
    "Senhas não coincidemA confirmação de senha deve ser igual à senha."
  );
});
