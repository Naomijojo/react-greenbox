import Mock from 'mockjs'
import data from './data.json'

Mock.mock('/mock/data',{code: 200, data: data})