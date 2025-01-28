import * as Yup from 'yup';

export const validationSchema = (emojiLimit) => Yup.object({
  emojis: Yup.string()
    .required('Hodnocení je povinné')
    .max(emojiLimit, `Maximální počet emotikonů je ${emojiLimit}`),
  interest: Yup.string()
    .required('Zájem je povinný')
    .max(emojiLimit, `Maximální počet emotikonů je ${emojiLimit}`),
  name: Yup.string().required('Jméno je povinné'),
  comment: Yup.string()
    .max(500, 'Komentář může mít maximálně 500 znaků'),
  projectId: Yup.string().required()
});
