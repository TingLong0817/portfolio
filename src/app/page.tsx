import {
  Heading,
  Flex,
  Text,
  Button,
  RevealFx,
  Column,
  Meta,
  Schema,
  Media,
  Carousel,
} from "@once-ui-system/core";
import { home, about, newsletter, baseURL, company } from "@/resources";
import { Mailchimp } from "@/components";
import { Projects } from "@/components/work/Projects";

export async function generateMetadata() {
  return Meta.generate({
    title: home.title,
    description: home.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(home.title)}`,
    path: home.path,
  });
}

export const revalidate = 0;

export default function HomePage() {
  return (
    <Column as="main" id="main" fillWidth>
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={home.title}
        description={home.description}
        path={home.path}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: company.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${company.avatar}`,
        }}
      />
      <Flex
        fillWidth
        vertical="center"
        paddingTop="xl"
        paddingBottom="l"
        gap="l"
        direction="column"
        paddingX="l"
      >
        <Column maxWidth="m" gap="m">
          <RevealFx>
            <Heading
              as="h1"
              variant="display-strong-xl"
              align="start"
              style={{
                color: '#6B21A8',
                fontFamily: 'var(--font-display)',
                fontSize: '7rem',
                fontWeight: 'bold',
              }}
            >
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx>
            <Text
              as="h2"
              variant="display-default-m"
              align="start"
              onBackground="neutral-weak"
            >
              {home.subline}
            </Text>
          </RevealFx>
        </Column>
      </Flex>
      {home.featured.display && (
        <Flex fillWidth horizontal="center" paddingBottom="xl" paddingX="l">
          <Button
            href={home.featured.href}
            prefixIcon="arrowRight"
            variant="secondary"
            size="l"
          >
            {home.featured.title}
          </Button>
        </Flex>
      )}

      {/* Merged content from About page */}
      <Column as="section" fillWidth gap="xl" marginBottom="40" paddingX="l">
        {about.intro.display && (
            <Flex fillWidth paddingY="s">
                <Text
                  align="start"
                  variant="body-default-xl"
                  onBackground="neutral-weak"
                >
                  {about.intro.description}
                </Text>
            </Flex>
        )}
      </Column>

      <Projects />

      {/* Team Info moved to the bottom */}
      <Column as="section" fillWidth gap="xl" marginBottom="40" paddingX="l">
        {about.work.display && (
          about.work.experiences.map(experience => (
            <Column key={experience.company} fillWidth gap="m">
              {experience.images && experience.images.length > 0 && (
                <Carousel
                  sizes="(max-width: 960px) 100vw, 960px"
                  items={experience.images.map(image => ({
                    slide: image.src,
                    alt: image.alt,
                  }))}
                />
              )}
              <Flex
                mobileDirection="column"
                fillWidth
                paddingX="s"
                paddingTop="12"
                paddingBottom="24"
                gap="l"
              >
                <Flex flex={5}>
                  <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                    {experience.company}
                  </Heading>
                </Flex>
                <Column flex={7} gap="16">
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {experience.achievements.map((achievement, index) => (
                      <p key={index}>{achievement}</p>
                    ))}
                  </Text>
                </Column>
              </Flex>
            </Column>
          ))
        )}

        {about.studies.display && (
          <Column fillWidth gap="m">
            <Flex
              mobileDirection="column"
              fillWidth
              paddingX="s"
              paddingTop="12"
              paddingBottom="24"
              gap="l"
            >
              <Flex flex={5}>
                <Heading as="h2" wrap="balance" variant="heading-strong-xl">
                  {about.studies.title}
                </Heading>
              </Flex>
              <Column flex={7} gap="16">
                {about.studies.institutions.map(institution => (
                  <Column key={institution.name}>
                    <Text variant="heading-strong-s">{institution.name}</Text>
                    <Text variant="body-default-s" onBackground="neutral-weak">{institution.description}</Text>
                  </Column>
                ))}
              </Column>
            </Flex>
          </Column>
        )}
      </Column>

      {newsletter.display && (
        <Flex
          fillWidth
          paddingY="xl"
          marginTop="xl"
          paddingX="l"
          horizontal="center"
        >
          <Mailchimp newsletter={newsletter}/>
        </Flex>
      )}
    </Column>
  );
}
