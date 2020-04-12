import { Vue } from 'vue-property-decorator'
import { UserNamesType } from '../constants'

export default class BaseQuestionComponent extends Vue {
  get namesIncrement (): UserNamesType[] {
    return ['']
  }
}
