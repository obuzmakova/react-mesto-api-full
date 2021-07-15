const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getUsers, getProfileInfo, getUser, updateProfile, updateAvatar,
} = require('../controllers/users');

router.get('/', getUsers);

router.get('/me', getProfileInfo);

router.get('/:userId', getUser);

router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    about: Joi.string().required().max(30),
  }),
}), updateProfile);

router.patch('/me/avatar', updateAvatar);

module.exports = router;