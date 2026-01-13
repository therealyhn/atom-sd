import MainLayout from './components/layout/MainLayout'
import Hero from './components/sections/Hero'
import ProductCategories from './components/sections/ProductCategories'

function App() {
  return (
    <MainLayout>
      <div className="flex flex-col h-screen overflow-hidden">
        <div className="flex-[2] min-h-0 relative">
          <Hero />
        </div>

        <div className="flex-1 min-h-0 border-t border-pewter bg-pewter/5">
          <ProductCategories />
        </div>
      </div>
    </MainLayout>
  )
}

export default App
