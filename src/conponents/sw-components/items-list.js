import ItemList from '../item-list';
import { WorkData } from '../hoc-helpers';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;



const PersonList = WorkData(ItemList, getAllPeople);
const PlaneetsList = WorkData(ItemList, getAllPlanets);
const StarshipsList = WorkData(ItemList, getAllStarships);

export {
    PersonList,
    PlaneetsList,
    StarshipsList
};

