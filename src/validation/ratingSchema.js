import * as Yup from 'yup';

export const validationSchema = (emojiLimit) => Yup.object({
  emojis: Yup.string()
    .required('Hodnocení je povinné')
    .max(emojiLimit, `Maximální počet emotikonů je ${emojiLimit}`),
  name: Yup.string().required('Jméno je povinné'),
  projectId: Yup.string().required()
});
