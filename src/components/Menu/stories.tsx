import { Meta, Story } from "@storybook/react/types-6-0";

// components
import Menu, { MenuProps } from ".";

// mock
import mock from "./mock";

export default {
	title: "Menu",
	component: Menu,
	args: mock,
	parameters: {
		layout: "fullscreen",
	},
} as Meta<MenuProps>;

export const Template: Story<MenuProps> = (args) => {
	return (
		<div style={{ maxWidth: "60rem", margin: "5rem auto" }}>
			<Menu {...args} />
			<p>
				Tincidunt montes ligula interdum turpis montes velit conubia,
				risus penatibus hendrerit vel. Rhoncus nunc sollicitudin ad sem,
				nunc porta venenatis. Praesent sem, eu ipsum risus bibendum
				molestie. Facilisi habitant natoque maecenas mi nisi justo
				torquent interdum. Pharetra justo platea curabitur. Donec vitae
				vehicula nunc est morbi consectetur vehicula mollis condimentum.
				Rhoncus vehicula massa platea vulputate erat! Integer vivamus,
				tristique pharetra est.
			</p>
			<p>
				Parturient curae; senectus dolor nisi nostra varius tortor
				hendrerit justo! Dapibus nostra aptent ac mattis lobortis primis
				ad pulvinar suscipit gravida rhoncus mauris. Sollicitudin
				ullamcorper nibh ligula non habitasse cras vivamus imperdiet
				elit. Leo dignissim, leo varius orci? Nam phasellus nisi duis
				gravida habitasse elementum torquent netus parturient platea sed
				laoreet. Ornare tristique odio tempor tellus. Etiam?
			</p>
			<p>
				Donec leo nullam viverra magnis lorem. Eget varius mattis cras,
				vulputate dictum odio ultricies curabitur sem inceptos nunc
				magnis? Tellus sapien mus potenti venenatis est dui ipsum.
				Nostra ornare habitant integer a justo justo sapien leo
				consectetur lorem, id nunc. Sodales velit pulvinar pretium ut
				consectetur nisl dapibus libero quam semper duis. Suspendisse
				condimentum bibendum mauris risus quisque. Justo proin pretium
				semper. Netus ultrices dictum dis porttitor. Urna iaculis mauris
				odio fames urna sociis potenti et. Adipiscing odio ullamcorper
				nunc.
			</p>
			<p>
				Dictum sed duis dolor torquent. Dapibus etiam quisque elit quis
				malesuada facilisi at? Sed per leo vitae adipiscing ligula
				phasellus commodo lectus felis phasellus. Fermentum class
				cursus, dignissim porta luctus sit leo. Vulputate commodo
				volutpat vehicula eget egestas urna duis cras odio nostra nam.
				Eleifend augue consequat amet nostra. Litora, aenean metus augue
				himenaeos est consequat potenti primis!
			</p>
			<p>
				Penatibus nascetur dictumst dapibus gravida vivamus risus
				sollicitudin est aptent sociosqu. Placerat nunc venenatis risus
				litora nulla. Scelerisque aenean justo aliquam risus vestibulum
				ultricies ultrices gravida condimentum. Etiam lectus lectus
				neque proin at nulla suscipit ipsum curae; aenean. Morbi
				volutpat lacus pretium vulputate, pellentesque elementum ornare.
				Pharetra interdum sed lorem. Libero curabitur cum a quam
				suscipit hac vivamus feugiat hac. Aliquet justo morbi blandit
				dictum donec morbi erat malesuada egestas, dictumst dictum.
				Fringilla curabitur molestie eleifend pulvinar est placerat ad
				ornare mattis fermentum nullam. Aliquam parturient?
			</p>
			<p>
				Ultrices placerat, justo leo lectus lorem orci hendrerit mollis
				curabitur! In volutpat, eleifend rhoncus ac suspendisse. Nunc
				rhoncus nec amet. Mollis cras odio auctor. Cubilia posuere
				pellentesque nec elementum feugiat eu quis sollicitudin vehicula
				in. Etiam imperdiet viverra velit vitae, cras egestas fames.
				Dolor malesuada purus mauris. Elit vivamus ut fringilla aenean
				faucibus, sociis.
			</p>
			<p>
				Ut suscipit mauris donec. Cum magna metus mollis odio bibendum
				tempor ligula phasellus rutrum nulla mus. Nullam cum litora
				interdum dictumst enim torquent velit dapibus maecenas aenean
				velit auctor. Arcu vulputate tincidunt nec! Taciti imperdiet
				inceptos eleifend sociosqu metus netus. Convallis consequat non
				augue risus ac dictum ultrices cras dolor vel potenti. Mauris
				elit porta sapien vestibulum. Mauris dolor, elit sociis cursus.
				Feugiat porta mauris nisl fermentum hendrerit non. Diam,
				ultricies laoreet aliquet primis dis semper malesuada hendrerit
				natoque! Mus porta.
			</p>
			<p>
				Ornare duis taciti ornare ornare quisque quis lectus penatibus?
				Convallis orci quisque porttitor phasellus auctor luctus commodo
				facilisi volutpat fringilla sollicitudin. Lacus, pretium
				ullamcorper sit et arcu. Sit magnis fringilla nec ridiculus
				vivamus viverra donec nisl nunc. Augue libero faucibus hac a.
				Vel taciti netus fermentum feugiat lobortis ornare lectus massa.
				Scelerisque mollis taciti.
			</p>
			<p>
				Nisi primis ridiculus sagittis justo habitasse vitae euismod
				viverra velit conubia. Nulla aliquam ac pharetra lorem nunc
				justo, facilisis odio tellus aliquet. Adipiscing per ipsum
				montes eros est tempus maecenas vestibulum. Orci metus ante eros
				faucibus vestibulum blandit. Congue mus porttitor dictum velit.
				Massa mus duis inceptos magna quam fringilla consectetur.
				Egestas hendrerit integer suspendisse primis nibh habitant ut in
				nisi! Tempor fringilla curabitur consectetur in urna, bibendum
				venenatis mollis potenti urna. Conubia scelerisque quam?
			</p>
			<p>
				Facilisis ut facilisi dui praesent turpis arcu. Feugiat sem
				torquent tempor maecenas suscipit adipiscing libero tempor sem
				eget consectetur! Nibh convallis etiam curae; gravida potenti.
				Imperdiet felis felis ornare augue nunc porta volutpat. Eros
				penatibus sagittis aliquam erat cras at suspendisse euismod
				curae; ullamcorper. Integer elementum torquent a lacinia quam
				et. Placerat ligula fringilla nisi!
			</p>
		</div>
	);
};
