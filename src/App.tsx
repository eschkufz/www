import { Button, Stack, Typography } from '@mui/material';
import { ReactNode, useState } from 'react';
import { Citation, CITATIONS } from './citations';
import { Academic, TREE } from './genalogy';

export function App() {
  return <Page>
    <Genealogy tree={TREE}/>
    <Cites citations={CITATIONS}/>
  </Page>;
}

type PageProps = {
  children: ReactNode;
};

function Page({children}: PageProps) {
  return <Stack direction="column" sx={{width: "100%", alignItems: "center"}}>
    <Stack direction="column" sx={{width: "750px", alignItems: "left", gap: 3, paddingTop: 8}}>
      {children}
    </Stack>
  </Stack>;
}

type GenealogyProps = {
  tree: Academic;
};

function Genealogy({tree}: GenealogyProps) {
  const [academics, setAcademics] = useState<Academic[]>([tree]);
  const collapse = (i: number) => setAcademics(academics.slice(0, i+1));
  const expand = (i: number, parent: Academic) => setAcademics([...academics.slice(0, i+1), parent]);

  return <Stack direction="column" sx={{width: "100%", alignItems: "left", gap: 1}}>
    {academics.map((academic, i)=><Individual key={`${academic.name}${i}`} academic={academic} activeParent={academics[i+1]} collapse={()=>collapse(i)} expand={(p)=>expand(i, p)}/>).reverse()}
  </Stack>;
}


type IndividualProps = {
  academic: Academic;
  activeParent?: Academic;
  collapse: ()=>void;
  expand: (parent: Academic)=>void;
};

function IndividualLong({academic}: IndividualProps) {
  return <Stack direction="column" sx={{width: "100%", alignItems: "left", gap: 1}}>
      <Typography>{academic.name}</Typography>
      <Typography>{academic.bio}</Typography>
    </Stack>;
}

function IndividualBrief({academic}: IndividualProps) {
  return <Stack direction="row" sx={{width: "100%", alignItems: "left", gap: 1}}>
      <Typography>{academic.name}</Typography>
      {academic.school && <Typography>{academic.school}</Typography>}
      {academic.grad && <Typography>{academic.grad}</Typography>}
  </Stack>;
}

type GenealogyButtonProps = IndividualProps & {
  parent: Academic;
};

function GenealogyButton({activeParent, parent, collapse, expand}: GenealogyButtonProps) {
  return <Button onClick={() => activeParent?.name === parent.name ? collapse() : expand(parent)}>{parent.name}</Button>
}

function Individual(props: IndividualProps) {
  return <Stack direction="column" sx={{width: "100%", alignItems: "left", gap: 1}}>
    <Stack direction="row" sx={{alignItems:"center", gap: 1}}>
      {props.academic.parents.map((parent, i)=><GenealogyButton key={`${props.academic.name}${i}`} {...props} parent={parent} />)}
    </Stack>
    {props.academic.bio ? <IndividualLong {...props}/> : <IndividualBrief {...props}/>}
  </Stack>;
}

type CiteProps = {
  citation: Citation;
};

function Cite({citation}: CiteProps) {
  const authors = citation.authors.map((author, i)=>i > 0 && i === citation.authors.length - 1 ? "and " + author : author).join(", ");
  return <Stack direction="column" sx={{width: "100%", alignItems: "left"}}>
    <Typography>{citation.title}</Typography>
    <Typography>{authors}</Typography>
    <Typography>{citation.venue}</Typography>
  </Stack>;
}

type CitesProps = {
  citations: Citation[];
};

function Cites({citations}: CitesProps) {
  return <Stack direction="column" sx={{width: "100%", alignItems: "left", gap: 1}}>
    {citations.map((citation, i)=><Cite key={i} citation={citation}/>)}
  </Stack>
}