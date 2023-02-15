'use strict';

const { faker } = require('@faker-js/faker')
const axios = require('axios')
const { Readable } = require("stream");


module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({ strapi }) {},

  async bootstrap({ strapi }) {

    // for (let index = 0; index < 500; index++) {
    //   console.log(index)
    //   const config = strapi.config.get('plugin.upload');
    //   const file = await axios.get(faker.image.abstract(), {
    //     responseType: 'arraybuffer',
    //   });
    //   const photo = {
    //     name: faker.word.noun()
    //   }
    //   const entity = {
    //     name: `${photo.name}`,
    //     hash: `${photo.name}`,
    //     ext: '.jpg',
    //     mime: file.headers['content-type'],
    //     size: file.headers['content-length'],
    //     provider: config.provider,
    //     tmpWorkingDirectory: './public/uploads',
    //     getStream: () => Readable.from(file.data),
    //   };
    //   await strapi.plugin('upload').service('upload').uploadImage(entity)
    //   const media = await strapi
    //     .query('plugin::upload.file')
    //     .create({ data: entity });

    //   try {
    //     await strapi.entityService.create('api::article.article', {
    //       data: {
    //         title: faker.word.noun(),
    //         content: faker.lorem.paragraph(),
    //         image: media,
    //         publicationState: "Published",
    //         publishedAt: "2023-01-23T17:10:46.984Z",
    //       },
    //     });
    //   } catch (e) {
    //     console.log(e.details)
    //   }
    // }
  },

  destroy({ strapi }) {},
};
