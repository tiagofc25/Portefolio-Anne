import Education from './education';
export default function Footer() {
  return (
    <footer className="bg-[#4A1525] text-[#F3ECE0] py-12 border-t border-primary/20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-8 mb-8">
          <div>
            <h3 className="font-semibold tracking-tight mb-1">Anne Thiriet</h3>
            <p className="text-sm text-primary-foreground/70">Marketing & Project Management Professional</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-sm text-primary-foreground/60 flex justify-between">
          <p>© 2025 Anne Thiriet. All rights reserved.</p>
          <p>Created by Tiago Fortes Coronel</p>
        </div>
      </div>
    </footer>
  )
}
