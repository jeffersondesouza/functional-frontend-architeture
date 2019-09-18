// @flow
import fakeEmailService from "axios";

const sendEmail = (sender: string, receiver: string, msg: string) =>
  fakeEmailService.sendEmail(sender, receiver, msg);

export default sendEmail;
