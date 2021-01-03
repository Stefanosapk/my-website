import { mount } from '@vue/test-utils'
import Index from '@/pages/Index.vue'

describe('Index.vue', () => {
  it('renders the title of developer', () => {
    const wrapper = mount(Index)
    const title = wrapper.find('.title-styling')
    expect(title.text()).toBe('Stefanos Apkarian - Software Engineer')
  })
  it('renders the description of developer', () => {
    const wrapper = mount(Index)
    const description = wrapper.find('.info-text')
    expect(description.text()).toBeTruthy()
  })

})
