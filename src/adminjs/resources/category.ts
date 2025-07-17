import { ResourceOptions } from "adminjs";

export const categoryResourcesOptions: ResourceOptions = {
    navigation: 'Catalog',
    editProperties: ['name', 'position'],
    filterProperties: ['name', 'position', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'name', 'position'],
    showProperties: ['id', 'name', 'position', 'createdAt', 'updatedAt']
}