const closeBtn = document.getElementsByClassName("fa-close")[0];
const checkBtn = document.getElementsByClassName("fa-check")[0];
const addNoteBtn = document.getElementById("addNoteBtn");
const masterNote = document.getElementById("masterArea");
const noteContainer = document.getElementsByClassName("container")[0];
let allNotes = [];
const showMasterNote = () => {
    masterNote.style.display = "block";
}
const closeMasterNote = () => {
    masterNote.style.display = "none";
}

addNoteBtn.addEventListener("click", () => {
    showMasterNote();
})

closeBtn.addEventListener("click", () => {
    closeMasterNote();
})

const deleteNote = ()=>{

    allNotes.forEach((e,i)=>{
        e.addEventListener("dblclick", ()=>{
            e.remove();
        });
    })
}

const hoverNotes = ()=>{
    allNotes.forEach((e)=>{
        e.addEventListener("mouseenter", ()=>{
            e.style.fontSize = "2.5rem";
        })
        e.addEventListener("mouseout", ()=>{
            e.style.fontSize = "2rem"
        })
    })
}
checkBtn.addEventListener("click", () => {
    let data = masterNote.lastElementChild.value;
    let textArea = document.createElement("textarea");
    textArea.value = data;
    textArea.style.transform = `rotate(${rotateFunc()})`;
    textArea.style.backgroundColor = `${colorFunc()}`;
    textArea.style.marginLeft = `${marginFunc()}px`;
    noteContainer.appendChild(textArea);
    masterNote.value = "";
    allNotes = Array.from(noteContainer.getElementsByTagName("textarea"))
    deleteNote();
    hoverNotes();   

})

const rotateFunc = () => {
    let rotateValue = Math.random() * 12;
    let d = new Date()
    if (d.getSeconds() % 2 === 0) {
        return rotateValue + "deg";
    }
    else {
        return -rotateValue + "deg";
    }
}

const colorFunc = () => {
    let colors = ["#e5e796", "#dbdb7d", "#fcd380", "#e8e874", "#e3cd94", "#f5c97c", "#82cdcd", "#eedd82", "#82cda8", "#82a8cd", "#cd8282", "#0198e1", "#eedd82", "#ffbf00", "#ff9912",
        "#8B8989", "#ADACAC", "#D0CFCF", "#F2F2F2", "#CDC9C9", "#DAD7D7", "#E6E4E4", "#F3F2F2", "#EEE9E9", "#F0ECEC", "#F2EEEE", "#F4F1F1", "#8B6969", "#AF9595", "#D2C3C3", "#F4F0F0", "#856363", "#AC9090", "#D0C0C0", "#F4F0F0", "#6F4242", "#A96E6E", "#CFAFAF", "#F5EFEF", "#BC8F8F", "#CFAFAF", "#E2CFCF", "#F5EFEF", "#CD9B9B", "#DBB7B7", "#E9D2D2", "#F7EEEE", "#8B3A3A", "#BF6666", "#DBA9A9", "#F7EDED", "#C67171", "#D79A9A", "#E7C4C4", "#F8EDED", "#802A2A", "#C54E4E", "#DF9D9D", "#F9ECEC", "#CD5C5C", "#DC8C8C", "#EABCBC", "#F9EBEB", "#CD5555", "#DC8787", "#EAB9B9", "#F9EBEB", "#A52A2A", "#D45757", "#E7A1A1", "#FAEBEB", "#8B2323", "#D04545", "#E59898", "#FAEBEB", "#8E2323", "#D14646", "#E69898", "#FAEBEB", "#A62A2A", "#D55858", "#E7A1A1", "#FAEBEB", "#CD3333", "#DC7070", "#EBADAD", "#FAEBEB", "#CC3232", "#DC6F6F", "#EBADAD", "#FAEBEB", "#EEB4B4", "#F2C6C6", "#F6D8D8", "#FAEAEA", "#BE2625", "#DF5B5A", "#EDA2A2", "#FBEAEA", "#8B1A1A", "#D93636", "#EA9090", "#FBEAEA", "#B22222", "#DE5151", "#EC9D9D", "#FBEAEA", "#CD2626", "#E26262", "#EEA6A6", "#FBE9E9", "#DB2929", "#E66969", "#F1A9A9", "#FBE9E9", "#8C1717", "#DD3131", "#EC8D8D", "#FBE9E9", "#F08080", "#F4A3A3", "#F8C5C5", "#FCE8E8", "#EE6363", "#F38F8F", "#F8BCBC", "#FCE8E8", "#EE3B3B", "#F37575", "#F8AEAE", "#FDE8E8", "#EE2C2C", "#F36A6A", "#F8A9A9", "#FDE7E7", "#330000", "#C30000", "#FF5555", "#FFE5E5", "#660000", "#E60000", "#FF6666", "#FFE5E5", "#800000", "#F70000", "#FF6F6F", "#FFE5E5", "#8B0000", "#FE0000", "#FF7272", "#FFE5E5", "#CD0000", "#FF2B2B", "#FF8888", "#FFE5E5", "#EE0000", "#FF4141", "#FF9393", "#FFE5E5", "#FF0000", "#FF4D4D", "#FF9999", "#FFE5E5", "#FF3030", "#FF6D6D", "#FFA9A9", "#FFE5E5", "#FF3333", "#FF6F6F", "#FFAAAA", "#FFE5E5", "#FF4040", "#FF7777", "#FFAEAE", "#FFE5E5",
        "#FF6666", "#FF9090", "#FFBBBB", "#FFE5E5", "#FF6A6A", "#FF9393", "#FFBCBC", "#FFE5E5", "#FFC1C1", "#FFCDCD", "#FFD9D9", "#FFE5E5", "#FFCCCC", "#FFD5D5", "#FFDDDD", "#FFE5E5", "#FFFAFA", "#FFFAFA", "#FFFAFA", "#FFFAFA",
        "#A02422", "#D94D4A", "#EA9B9A", "#FBEAEA", "#C65D57", "#D78D89", "#E8BDBA", "#F9EDEC", "#D44942", "#E17F7A", "#EEB5B2", "#FAEBEA", "#F2473F", "#F67D77", "#FAB2AF", "#FDE8E7", "#E3170D", "#F5554D", "#F99E9A", "#FEE8E7",
        "#9D1309", "#F22C1E", "#F88A82", "#FEE8E7", "#CDB7B5", "#DACAC9", "#E7DDDC", "#F5F0F0", "#AF4035", "#D17268", "#E5AFAA", "#F9EDEB", "#ECC3BF", "#F0D1CE", "#F5DFDD", "#F9EDEB", "#FC1501", "#FE5A4C", "#FFA199", "#FFE8E6", "#CC1100", "#FF3C2A", "#FF9288", "#FFE8E5", "#EED5D2", "#F1DDDB", "#F5E5E4", "#F8EEEC", "#FA8072", "#FBA399", "#FDC6C0", "#FEE9E6", "#FFE4E1", "#FFE5E2", "#FFE7E4", "#FFE8E5", "#8B7D7B", "#AEA4A2", "#D0CBCA", "#F3F2F1",
        "#D66F62", "#E29990", "#EEC3BD", "#FAECEB", "#C75D4D", "#D88D82", "#E8BDB7", "#F9EDEC", "#FF2400", "#FF664D", "#FFA799", "#FFE9E5", "#8A3324", "#CF5B47", "#E4A499", "#FAEDEB", "#CD4F39", "#DC8474", "#EBB8AF", "#FAEDEB", "#EE5C42", "#F38C79", "#F8BBB0", "#FDEBE8", "#FF5333", "#FF856F", "#FFB7AA", "#FFE9E5", "#FF6347", "#FF907C", "#FFBDB1", "#FFE9E5",
        "#B0A6A4", "#C6BFBE", "#DDD8D8", "#F3F2F1", "#8B3E2F", "#C66957", "#DFACA2", "#F9EEEC", "#8B3626", "#CE5F4A", "#E4A69A", "#FAEDEB", "#CD5B45", "#DC8C7C", "#EBBDB4", "#FAEDEB", "#EE6A50", "#F39583", "#F8C0B5", "#FDEBE8", "#FF7256", "#FF9A86", "#FFC2B6", "#FFEAE5", "#B3432B", "#D8735D", "#E9B0A4", "#FAEDEA", "#D43D1A", "#EA7256", "#F3AF9F", "#FCECE8",
        "#F5785A", "#F89E89", "#FBC5B8", "#FEEBE7", "#FF3300", "#FF704D", "#FFAD99", "#FFEBE5", "#FF3D0D", "#FF7755", "#FFB19D", "#FFEBE5", "#8B4C39", "#C07A65", "#DCB5A9", "#F8EFED", "#CD7054", "#DC9A86", "#EAC4B9", "#F9EEEB",
        "#C73F17", "#EA6F4B", "#F3AE9A", "#FCEDE8", "#EE8262", "#F3A68F", "#F8C9BB", "#FDEDE8", "#FF8C69", "#FFAC92", "#FFCCBC", "#FFEBE5", "#A78D84", "#C1AEA8", "#DBD0CC", "#F4F1F0", "#E9967A", "#EFB39F", "#F5D0C4", "#FBEEE9", "#FF5721", "#FF8962", "#FFBAA4", "#FFECE5", "#5E2612", "#C65026", "#E79C81", "#FBEEEA",
        "#E04006", "#FA7241", "#FCAF94", "#FEEDE6", "#8B2500", "#FE4400", "#FF9872", "#FFECE5", "#CD3700", "#FF642B", "#FFA888", "#FFECE5", "#EE4000", "#FF7441", "#FFB093", "#FFECE5", "#FF4500", "#FF7D4D", "#FFB599", "#FFECE5", "#FF7F50", "#FFA382", "#FFC8B4", "#FFECE5", "#8B5742", "#BB856F", "#D9BBAF", "#F7F0EE", "#CD8162", "#DCA690", "#EACBBE", "#F9EFEC", "#EE9572", "#F3B399", "#F8D0C1", "#FCEEE8", "#B13E0F", "#EE6A34", "#F5AC8E", "#FDEEE7", "#691F01", "#E64402", "#FE9469", "#FFEDE6", "#FFA07A", "#FFBA9E", "#FFD3C2", "#FFEDE5", "#5C4033", "#A5735C", "#CDB2A5", "#F6F1EF", "#D19275", "#DEB19D", "#EBD1C4", "#F9F0EC", "#A0522D", "#D0805A", "#E5B8A2", "#F9F0EB", "#CD6839", "#DC9574", "#EBC2AF", "#FAEFEB", "#8A360F", "#E76021", "#F2A784", "#FDEEE8", "#EE7942", "#F3A079", "#F8C7B0", "#FDEEE8", "#FF7D40", "#FFA377", "#FFC8AE", "#FFEEE5", "#FF8247", "#FFA67C", "#FFCAB1", "#FFEEE5", "#8B4726", "#CE754A", "#E4B29A", "#FAF0EB", "#DB9370", "#E5B299", "#F0D1C2", "#FAF0EB", "#87421F", "#D3703E", "#E6B094", "#FAF0EA", "#993300", "#FF5B09", "#FFA477", "#FFEEE5",
        "#F87531", "#FA9D6D", "#FCC6AA", "#FEEEE6", "#292421", "#75675E", "#B7ACA5", "#F4F2F1", "#97694F", "#BC957F", "#D9C3B7", "#F6F1EE", "#5E2605", "#D8570B", "#F7A06D", "#FEEFE7", "#FBA16C", "#FCBB95", "#FDD5BD", "#FEEFE6", "#FF6103", "#FF904F", "#FFC09A", "#FFEFE5", "#964514", "#E37330", "#F0B28C", "#FCF0E8", "#E47833", "#ECA06F", "#F4C8AC", "#FCF0E8",
        "#FF7722", "#FF9F63", "#FFC7A4", "#FFEFE5",
        "#6B4226", "#BD7645", "#DBB399", "#F8F1EC", "#5C3317", "#BF6A30", "#E1AC88", "#FAF1EB", "#733D1A", "#D06F2F", "#E5B08D", "#FAF1EA", "#FF6600", "#FF944D", "#FFC299", "#FFF0E5", "#FF7216", "#FF9C5B", "#FFC6A0", "#FFF0E5", "#FF9955", "#FFB685", "#FFD3B5", "#FFF0E5",
        "#A68064", "#C1A692", "#DBCCC1", "#F6F2EF", "#855E42", "#B78D6F", "#D7BFAE", "#F7F2EE",
        "#E9C2A6", "#EFD2BD", "#F4E1D4", "#FAF1EB", "#CD661D", "#E79256", "#F1C2A0", "#FCF1E9", "#D2691E", "#E7955A", "#F2C3A1", "#FCF1E9", "#8B4513", "#E27629", "#EFB389", "#FCF1E9", "#EE7621", "#F39F63", "#F8C8A5", "#FDF0E7", "#FF7F24", "#FFA564", "#FFCAA5", "#FFF0E5", "#FFF5EE", "#FFF5EE", "#FFF5EE", "#FFF5EE", "#CDC5BF", "#DAD4D0", "#E7E3E0", "#F4F2F1", "#EEE5DE", "#F1E9E3", "#F4EDE9", "#F6F2EE",
        "#BC7642", "#D09F7A", "#E4C8B3", "#F8F1EC",
        "#603311", "#C96B24", "#E9AD80", "#FBF1E9", "#E3701A", "#ED9B5E", "#F4C6A3", "#FCF1E8", "#C76114", "#ED8E47", "#F5BF97", "#FDF1E8",
        "#FA9A50", "#FBB782", "#FDD4B4", "#FEF1E6", "#8B8682", "#AEAAA7", "#D0CECD", "#F3F2F2", "#EE8833", "#F3AB6F", "#F8CEAB", "#FDF1E7",
        "#FEE8D6", "#FEEBDB", "#FEEEE1", "#FEF1E6", "#B6AFA9", "#CAC5C1", "#DFDCD9", "#F3F2F1", "#8B7765", "#B0A092", "#D2C9C1", "#F4F2F0", "#CDAF95", "#DBC5B3", "#E9DCD0", "#F7F2EE", "#EECBAD", "#F2D8C1", "#F6E5D6", "#FBF2EA", "#F4A460", "#F7BE8D", "#FAD8BA", "#FDF1E7", "#FFDAB9", "#FFE2C8", "#FFEAD7", "#FFF2E5", "#8B5A2B", "#C98C52", "#E1BF9F", "#F9F2EC", "#B87333", "#D59D69", "#E7C8AA", "#F9F2EB", "#EE9A49", "#F3B77E", "#F8D5B3", "#FDF2E8", "#AA5303", "#FB861A", "#FDBC80", "#FFF2E6", "#FFA54F", "#FFBF81", "#FFD8B3", "#FFF2E5", "#E7C6A5", "#EDD5BC", "#F3E4D4", "#FAF2EB", "#CD853F", "#DCA978", "#EBCEB2", "#FAF2EB", "#CD7F32", "#DCA570", "#EBCCAD", "#FAF2EA", "#CC7F32", "#DCA56F", "#EBCCAD", "#FAF2EB", "#FAF0E6", "#FAF1E7", "#FAF1E8", "#FBF2EA", "#CC7722", "#E4A05C", "#F0C9A3", "#FBF2E9", "#8B4500", "#FE7E00", "#FFB872", "#FFF2E5", "#CD6600", "#FF952B", "#FFC388", "#FFF2E5", "#EE7600", "#FF9F41", "#FFC993", "#FFF2E5", "#FF8000", "#FFA64D", "#FFCC99", "#FFF2E5", "#FF7F00", "#FFA54D", "#FFCC99", "#FFF2E5", "#FFCC99", "#FFD9B2", "#FFE6CC", "#FFF2E5",
        "#C9AF94", "#D8C5B2", "#E7DCD0", "#F6F2EE",
        "#362819", "#926C44", "#CCB091", "#F7F2EE",
        "#B67C3D", "#D0A473", "#E4CBB0", "#F9F3EC", "#C77826", "#E0A15F", "#EECAA4", "#FBF2EA", "#E3A869", "#EBC194", "#F3DABF", "#FBF3EA", "#E38217", "#EEA85A", "#F5CDA1", "#FDF3E8", "#7B3F00", "#F47D00", "#FFB86D", "#FFF3E5", "#CDB79E", "#DBCBB9", "#E9DFD3", "#F6F3EE", "#9F703A", "#C99C6A", "#E0C8AB", "#F8F3EC",
        "#EBCEAC", "#F0DAC1", "#F5E7D6", "#FAF3EA", "#EBC79E", "#F0D6B7", "#F5E4D1", "#FBF3EA",
        "#EDC393", "#F2D3B0", "#F7E3CC", "#FBF3E9", "#E18E2E", "#EAB06C", "#F3D1AA", "#FCF3E9", "#C76E06", "#F99D31", "#FCC88C", "#FEF3E6",
        "#DD7500", "#FFA036", "#FFCA8E", "#FFF3E5", "#FF8600", "#FFAA4D", "#FFCF99", "#FFF3E5", "#CDC0B0", "#DAD1C5", "#E8E2DA", "#F5F3EF", "#8B7355", "#B39E83", "#D4C8B9", "#F5F3EF", "#EED5B7", "#F2DFC8", "#F6E9D9", "#FAF3EA", "#DFAE74", "#E8C59B", "#F1DCC3", "#FAF3EA", "#ED9121", "#F2B263", "#F8D3A5", "#FDF3E7", "#FF8C00", "#FFAF4D", "#FFD199", "#FFF3E5", "#FFE4C4", "#FFE9CF", "#FFEEDA", "#FFF3E5", "#FFEFDB", "#FFF1DF", "#FFF2E2", "#FFF4E5", "#8B7D6B", "#AFA497", "#D1CBC4", "#F4F2F1",
        "#A39480", "#BEB4A5", "#D9D3CB", "#F4F3F0", "#CDAA7D", "#DBC2A2", "#EADBC7", "#F8F3ED", "#D2B48C", "#DFC9AC", "#EBDECC", "#F8F3ED", "#EEDFCC", "#F2E6D7", "#F5ECE1", "#F9F3EC", "#C48E48", "#D6B07F", "#E7D1B5", "#F9F3EC", "#DEB887", "#E7CCA8", "#F0DFCA", "#F9F3EB", "#9C661F", "#DA9944", "#EAC697", "#FBF3EA", "#EEC591", "#F3D4AE", "#F7E4CC", "#FCF3E9", "#FAEBD7", "#FBEEDD", "#FBF1E3", "#FCF4E8",
        "#D98719", "#ECAC57", "#F4D0A0", "#FCF4E8", "#FCE6C9", "#FDEBD3", "#FDEFDD", "#FEF4E7", "#FF9912", "#FFB759", "#FFD69F", "#FFF4E5", "#FFD39B", "#FFDEB4", "#FFE9CD", "#FFF4E5", "#8B8378", "#AEA8A0", "#D0CDC9", "#F3F2F1", "#B28647", "#CBAB7D", "#E1CFB5", "#F8F3ED", "#734A12", "#D88B22", "#ECC084", "#FCF4E9", "#8B795E", "#B1A28C", "#D3CABE", "#F5F3F0", "#CDB38B", "#DBC8AC", "#E9DECC", "#F7F3ED", "#EECFA1", "#F2DBB9", "#F7E8D1", "#FBF4E9", "#DC8909", "#F7B043", "#FBD395", "#FEF5E7", "#FCD59C", "#FDDFB5", "#FEEACE", "#FEF4E6", "#FEF0DB", "#FEF2DF", "#FEF3E2", "#FEF5E6", "#AA6600", "#FFA114", "#FFCB7D", "#FFF5E5", "#FFA824", "#FFC264", "#FFDBA5", "#FFF5E5", "#FFC469", "#FFD492", "#FFE5BC", "#FFF5E5", "#FFDEAD", "#FFE6C0", "#FFEDD3", "#FFF5E5", "#FFEBCD", "#FFEED5", "#FFF2DD", "#FFF5E5", "#A67D3D", "#CAA66F", "#E1CDAE", "#F8F4EC",
        "#EED6AF", "#F2E0C3", "#F6EAD6", "#FBF4EA", "#FFEFD5", "#FFF1DB", "#FFF3E0", "#FFF5E5", "#FFA812", "#FFC259", "#FFDC9F", "#FFF6E5", "#FFE4B5", "#FFEAC5", "#FFF0D5", "#FFF6E5", "#8B7E66", "#B0A593", "#D2CCC1", "#F4F3F0", "#8C7853", "#B5A382", "#D5CBB8", "#F6F3EF", "#CDBA96", "#DBCDB3", "#E9E0D0", "#F7F4EE", "#EED8AE", "#F2E2C2", "#F6EBD6", "#FBF5EA", "#F5DEB3", "#F7E6C5", "#FAEDD7", "#FCF5E8", "#FDF5E6", "#FDF5E6", "#FDF5E7", "#FDF6E7", "#8B5A00", "#FEA500", "#FFCD72", "#FFF6E5", "#CD8500", "#FFB52B", "#FFD588", "#FFF6E5", "#EE9A00", "#FFBC41", "#FFD993", "#FFF6E5", "#FFA500", "#FFC04D", "#FFDB99", "#FFF6E5", "#FFE7BA", "#FFECC8", "#FFF1D7", "#FFF6E5",
        "#D5B77A", "#E1CCA0", "#EDE0C6", "#F9F5EC", "#8E6B23", "#D1A446", "#E6CC98", "#FAF5EB",
        "#AC7F24", "#DBAD51", "#EBD19E", "#FBF5EA", "#FFAA00", "#FFC34D", "#FFDD99", "#FFF6E5",
        "#FFB00F", "#FFC857", "#FFDF9E", "#FFF7E5", "#FFFAF0", "#FFFAF0", "#FFFAF0", "#FFFAF0",
        "#E8C782", "#EED6A4", "#F5E6C7",
    ];
    let index = Math.floor(Math.random() * colors.length)
    return colors[index];
}

const marginFunc = ()=>{
    let marginValue = Math.floor(Math.random() * 20);
    let d = new Date();
    if (d.getSeconds() %2 === 0)
    {
        return -marginValue;
    }
    else
    {
        return marginValue;
    }
}

